import express from 'express';
import { PORT } from '../utils/env';
import userRoutes from './routes/user';
import packageRoutes from './routes/package';
const app = express();

app.use(express.json());

app.use('/api/usuario', userRoutes);
app.use('/api/encomendas', packageRoutes);

app.listen(PORT, () => console.log(`running on ${PORT}`));
