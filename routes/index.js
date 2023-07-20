import { Router } from "express";
import plantsRoutes from "./plants.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/plants", plantsRoutes);

export default router;