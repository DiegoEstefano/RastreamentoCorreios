import amqp from 'amqplib';
import {
  amqpConnection,
  exchangeDefault,
  exchangeTypeDefault,
} from './Config/amqp';
import { ConsumeCallback } from './Config/types';

class Amqp {
  public conn!: amqp.Connection;
  private booted: boolean = false;

  public async boot() {
    /**
     * Ignore multiple calls to the boot method
     */
    if (this.booted) return true;

    this.conn = await amqp.connect(amqpConnection);
    console.info(`Conectado no servidor ${JSON.stringify(amqpConnection)}`);

    this.booted = true;
    return true;
  }

  public async publishMessage(routingKey: string, message: object) {
    let channel: amqp.Channel | undefined;

    try {
      channel = await this.conn.createChannel();
      await channel.assertExchange(exchangeDefault, exchangeTypeDefault, {
        durable: false,
      });
      await channel.publish(
        exchangeDefault,
        routingKey,
        Buffer.from(JSON.stringify(message))
      );
    } catch (error) {
      console.error(`[AMQP] Publish ERROR (${exchangeDefault}/${routingKey})`);
    }

    await this.close(channel);
  }

  public async consume(
    routingKey: string,
    callback: ConsumeCallback,
    clearQueue: boolean = true
  ) {
    let channel: amqp.Channel | undefined;

    try {
      channel = await this.conn.createChannel();
      await channel.assertExchange(exchangeDefault, exchangeTypeDefault, {
        durable: false,
      });

      const qok = await channel.assertQueue('', {
        exclusive: true,
        autoDelete: true,
      });
      await channel.bindQueue(qok.queue, exchangeDefault, routingKey);

      if (clearQueue) {
        await channel.purgeQueue(qok.queue);
      }

      console.info(`[AMQP] Waiting for messages in ${qok.queue}/${routingKey}`);

      await channel.consume(
        qok.queue,
        async (msg) => {
          if (!msg) throw '[Amqp.consume] returned nothing!';
          try {
            const data = JSON.parse(msg.content.toString());
            await callback(data, channel);
          } catch (error) {
            console.error('[Amqp.consume] Error while processing results!');
            console.error(`[Amqp.consume] Message: ${msg}, Error: ${error}`);
            await this.close(channel);
          }
        },
        { noAck: true }
      );
    } catch (error) {
      console.error(
        `[AMQP] Consume ERROR (${routingKey}): ${JSON.stringify(error)}`
      );
    }

    return channel;
  }

  public async sendMessage(queue: string, message: object, options?: object) {
    let channel: amqp.Channel | undefined;

    try {
      channel = await this.conn.createChannel();
      await channel.assertQueue(queue, {
        ...(options ? options : { durable: false }),
      });
      await channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    } catch (error) {
      console.error(`[AMQP] Producer ERROR (${queue})`);
    }

    await this.close(channel);
  }

  public async consumeQueue(
    queue: string,
    callback: ConsumeCallback,
    options?: object
  ) {
    let channel: amqp.Channel | undefined;

    try {
      channel = await this.conn.createChannel();
      await channel.assertQueue(queue, {
        ...(options ? options : { durable: false }),
      });
      await channel.prefetch(1);
      console.info(`[AMQP] Waiting for messages in ${queue}`);

      await channel.consume(
        queue,
        async (msg) => {
          if (!msg) throw '[Amqp.consume] returned nothing!';
          try {
            const data = JSON.parse(msg.content.toString());
            await callback(data, channel);
          } catch (error) {
            console.error('[Amqp.consume] Error while processing results!');
            console.error(
              `[Amqp.consume] Queue: ${queue} Message: ${msg.content.toString()}, Error: ${JSON.stringify(
                error
              )}`
            );
            await this.close(channel);
          }
        },
        { noAck: true }
      );
    } catch (error) {
      console.error(
        `[Amqp.consume] Error (${queue}): ${JSON.stringify(error)}`
      );
    }

    return channel;
  }

  private async close(channel?: amqp.Channel) {
    try {
      await channel?.close();
    } catch (error) {
      console.error('[Amqp.consume] Error while closing channel!');
      console.error(`[Amqp.consume] Error: ${JSON.stringify(error)}`);
    }
  }
}

export default new Amqp();
