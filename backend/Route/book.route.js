import express from "express";
import { getBook } from "../Controler/Book.Controler.js";

const router=express.Router();

router.get("/",getBook);

export default router;