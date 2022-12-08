import amqp from 'amqplib';

export type ConsumeCallback = (
  data: Consume,
  channel?: amqp.Channel
) => void | Promise<void>;

export interface Consume {}

