import { Router } from "express";
import { validateUsername } from "../controllers/userControllers";

const router = Router();

router.post("/", validateUsername);

export default router;
