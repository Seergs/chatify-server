import { Router } from "express";
import { getAllMessages } from "../controllers/messageControllers";

const router = Router();

router.get("/", getAllMessages);

export default router;
