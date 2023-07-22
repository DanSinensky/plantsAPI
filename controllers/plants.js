import Plant from "../models/Plant.js";
const validQueries = [
  "common_name", "scientific_name", "other_name", "family", "origin", "type", "dimension", "dimensions_type", "dimensions_min", "dimensions_max", "dimensions_unit", "cycle", "attracts", "propagation", "hardiness_min", "hardiness_max", "watering", "depth_water_requirement_unit", "depth_water_requirement_value", "volume_water_requirement_unit", "volume_water_requirement_value", "watering_period", "watering_general_benchmark_value", "watering_general_benchmark_unit", "plant_anatomy_trunk", "plant_anatomy_trunk_color", "plant_anatomy_leaves", "plant_anatomy_leaves_color", "plant_anatomy_branches", "plant_anatomy_branches_color", "plant_anatomy_branch", "plant_anatomy_branch_color",
  "plant_anatomy_vein", "plant_anatomy_vein_color", "plant_anatomy_cones", "plant_anatomy_cones_color", "plant_anatomy_twigs", "plant_anatomy_twigs_color", "plant_anatomy_stems", "plant_anatomy_stems", "plant_anatomy_stems_color", "sunlight", "pruning_month", "pruning_count", "seeds", "maintenance", "soil", "growth_rate", "drought_tolerant", "salt_tolerant", "thorny", "invasive", "tropical", "indoor", "care_level", "pest_susceptibility", "flowers", "flowering_season", "flower_color", "cones", "fruits", "edible_fruit", "fruit_color", "harvest_season", "leaf", "leaf_color", "edible_leaf", "cuisine",
  "medicinal", "poisonous_to_humans", "poisonous_to_pets"
]

export const getPlants = async (req, res) => {
  try {
    let plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPlant = async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await Plant.findById(id);

    if (plant) {
      return res.json(plant);
    }

    res.status(404).json({ message: "Plant not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createPlant = async (req, res) => {
  const plant = new Plant(req.body);
  await plant.save();
  res.status(201).json(plant);
};

export const updatePlant = async (req, res) => {
  const { id } = req.params;
  const plant = await Plant.findByIdAndUpdate(id, req.body);
  res.status(201).json(plant);
};

export const deletePlant = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Plant.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Plant Deleted!");
    }

    throw new Error("Plant not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getDroughtTolerant = async (req, res) => {
  try {
    const droughtTolerant = await Plant.find({ "drought_tolerant": req.params.drought_tolerant.charAt(0).toLowerCase() + req.params.drought_tolerant.slice(1) });

    if (droughtTolerant) {
      return res.json(droughtTolerant);
    }

    res.status(404).json({ message: "Enter 'true' or 'false'" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getSaltTolerant = async (req, res) => {
  try {
    const saltTolerant = await Plant.find({ "salt_tolerant": req.params.salt_tolerant.charAt(0).toLowerCase() + req.params.salt_tolerant.slice(1) });

    if (saltTolerant) {
      return res.json(saltTolerant);
    }

    res.status(404).json({ message: "Enter 'true' or 'false'" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getThorny = async (req, res) => {
  try {
    const thorny = await Plant.find({ "thorny": req.params.thorny.charAt(0).toLowerCase() + req.params.thorny.slice(1) });

    if (thorny) {
      return res.json(thorny);
    }

    res.status(404).json({ message: "Enter 'true' or 'false'" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getInvasive = async (req, res) => {
  try {
    const invasive = await Plant.find({ "invasive": req.params.invasive.charAt(0).toLowerCase() + req.params.invasive.slice(1) });

    if (invasive) {
      return res.json(invasive);
    }

    res.status(404).json({ message: "Enter 'true' or 'false'" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getTropical = async (req, res) => {
  try {
    const tropical = await Plant.find({ "tropical": req.params.tropical.charAt(0).toLowerCase() + req.params.tropical.slice(1) });

    if (tropical) {
      return res.json(tropical);
    }

    res.status(404).json({ message: "Enter 'true' or 'false'" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getIndoor = async (req, res) => {
  try {
    const indoor = await Plant.find({ "indoor": req.params.indoor.charAt(0).toLowerCase() + req.params.indoor.slice(1) });

    if (indoor) {
      return res.json(indoor);
    }

    res.status(404).json({ message: "Enter 'true' or 'false'" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getLeaf = async (req, res) => {
  try {
    const leaf = await Plant.find({ "leaf": req.params.leaf.charAt(0).toLowerCase() + req.params.leaf.slice(1) });

    if (leaf) {
      return res.json(leaf);
    }

    res.status(404).json({ message: "Enter 'true' or 'false'" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getLeafColor = async (req, res) => {
  try {
    const leafColor = Plant.find({ leaf_color: req.params.leaf_color })

    if (leafColor) {
      return res.json(leafColor)
    }

    res.status(404).json({ message: "Enter a leaf color" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getEdibleLeaf = async (req, res) => {
  try {
    const edibleLeaf = await Plant.find({ "edible_leaf": req.params.edible_leaf.charAt(0).toLowerCase() + req.params.edible_leaf.slice(1) });

    if (edibleLeaf) {
      return res.json(edibleLeaf);
    }

    res.status(404).json({ message: "Enter 'true' or 'false'" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getNeedsWatering = async (req, res) => {
  try {
    const watering = await Plant.find({ "watering": req.params.watering.charAt(0).toUpperCase() + req.params.watering.slice(1) });

    if (watering) {
      return res.json(watering);
    }

    res.status(404).json({ message: "Enter 'true' or 'false'" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getOrigin = async (req, res) => {
  try {
    const origin = await Plant.find({ origin: req.params.origin.charAt(0).toUpperCase() + req.params.origin.slice(1) });

    if (origin) {
      return res.json(origin)
    }

    res.status(404).json({ message: "Enter a country or region" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getQuery = async (req, res) => {
  try {
    let x = req.query
    let y = {}
    
    let z = Object.entries(x)
    
    for (let i = 0; i < z.length; i++) {
      y[z[i][0]] = z[i][1]
    }
    
    const queryResult = await Plant.find(y)

    if (queryResult) {
      return res.json(queryResult)
    }

    res.status(404).json({ message: "Enter valid queries" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};