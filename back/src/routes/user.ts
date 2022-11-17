import express from 'express';
import { register, login } from '../controllers/userController';
const router = express.Router();

router.post('/registrar', register).post('/entrar', login);

export default router;
