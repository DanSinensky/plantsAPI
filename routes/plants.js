import { Router } from "express";
import * as controllers from "../controllers/plants.js";

const router = Router();

router.get("/", controllers.getQuery);
router.get("/", controllers.getPlants);
router.get("/:id", controllers.getPlant);
router.post("/", controllers.createPlant);
router.put("/:id", controllers.updatePlant);
router.delete("/:id", controllers.deletePlant);

export default router;