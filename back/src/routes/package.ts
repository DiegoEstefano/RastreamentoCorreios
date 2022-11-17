import express from "express";
import {
  create,
  edit,
  delet,
  getAllPackages,
} from "../controllers/packageController";
const router = express.Router();

router
  .get("/:userId", getAllPackages)
  .post("/criar", create)
  .put("/editar-encomenda", edit)
  .delete("/deletar-encomenda", delet);

export default router;
