import Plant from "../models/Plant.js";

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

    res.status(404).json({ message: "Enter 'true' or 'false'"})
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

    res.status(404).json({ message: "Enter 'true' or 'false'"})
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

    res.status(404).json({ message: "Enter 'true' or 'false'"})
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

    res.status(404).json({ message: "Enter 'true' or 'false'"})
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

    res.status(404).json({ message: "Enter 'true' or 'false'"})
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

    res.status(404).json({ message: "Enter 'true' or 'false'"})
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

    res.status(404).json({ message: "Enter 'true' or 'false'"})
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

    res.status(404).json({ message: "Enter a leaf color"})
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

    res.status(404).json({ message: "Enter 'true' or 'false'"})
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

    res.status(404).json({ message: "Enter 'true' or 'false'"})
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

    res.status(404).json({ message: "Enter a country or region"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};