import { Router } from "express";

const router = Router();

// Instead of the empty function, grab it from controllers
router.get("/", () => {});
router.post("/", () => {});

router.get("/:id", () => {});
router.put("/:id", () => {});
router.delete("/:id", () => {});

export default router;
