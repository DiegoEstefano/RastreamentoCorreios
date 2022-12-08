import express from 'express';
import { PORT } from '../utils/env';
import userRoutes from './routes/user';
import packageRoutes from './routes/package';
import { updateAllPackages } from './services/updateAllPackages';
import login from './middlewares/login';
const app = express();

app.use(express.json());

app.use('/api/usuario', userRoutes);
app.use('/api/encomendas', login, packageRoutes);

updateAllPackages()

app.listen(PORT, () => console.log(`running on ${PORT}`));
