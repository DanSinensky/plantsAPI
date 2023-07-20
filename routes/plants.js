import { Router } from "express";
import * as controllers from "../controllers/plants.js";

const router = Router();

router.get("/", controllers.getPlants);
router.get("/watering/:watering", controllers.getNeedsWatering)
router.get("/drought_tolerant", controllers.getDroughtTolerant);
router.get("/salt_tolerant", controllers.getSaltTolerant);
router.get("/thorny", controllers.getThorny);
router.get("/invasive", controllers.getInvasive);
router.get("/tropical", controllers.getTropical);
router.get("/indoor", controllers.getIndoor);
router.get("/:id", controllers.getPlant);
router.post("/", controllers.createPlant);
router.put("/:id", controllers.updatePlant);
router.delete("/:id", controllers.deletePlant);


export default router;