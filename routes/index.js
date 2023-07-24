import { Router } from "express";
import plantsRoutes from "./plants.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the API root. Don't forget to include '/plants' in your request!");
});

router.use("/plants", plantsRoutes);

export default router;