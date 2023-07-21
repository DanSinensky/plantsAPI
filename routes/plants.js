import { Router } from "express";
import * as controllers from "../controllers/plants.js";

const router = Router();

router.get("/", controllers.getPlants);
router.get("/origin/:origin", controllers.getOrigin);
router.get("/watering/:watering", controllers.getNeedsWatering);
router.get("/leaf/:leaf", controllers.getLeaf);
router.get("/leaf_color/:leaf_color", controllers.getLeafColor);
router.get("/edible_leaf/:edible_leaf", controllers.getEdibleLeaf)
router.get("/drought_tolerant/:drought_tolerant", controllers.getDroughtTolerant);
router.get("/salt_tolerant/:salt_tolerant", controllers.getSaltTolerant);
router.get("/thorny/:thorny", controllers.getThorny);
router.get("/invasive/:invasive", controllers.getInvasive);
router.get("/tropical/:tropical", controllers.getTropical);
router.get("/indoor/:indoor", controllers.getIndoor);
router.get("/:id", controllers.getPlant);
router.post("/", controllers.createPlant);
router.put("/:id", controllers.updatePlant);
router.delete("/:id", controllers.deletePlant);

export default router;