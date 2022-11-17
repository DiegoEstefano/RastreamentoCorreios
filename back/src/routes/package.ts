import express from 'express';
import {
  create,
  edit,
  delet,
  getAllPackages,
} from '../controllers/packageController';
const router = express.Router();

router
  .get('/encomendas/:userId', getAllPackages)
  .get('/adicionar-encomenda', create)
  .get('/editar-encomenda', edit)
  .get('/deletar-encomenda', delet);

export default router;
