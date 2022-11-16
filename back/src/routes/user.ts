import express from 'express';
import { register, login } from '../controllers/userController';
const router = express.Router();

router.get('/registrar', register).get('/entrar', login);

export default router;
