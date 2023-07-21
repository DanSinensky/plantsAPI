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
  let droughtTolerant = await Plant.find({ "drought_tolerant": req.params.drought_tolerant });

  res.json(droughtTolerant)
};

export const getSaltTolerant = async (req, res) => {
  let saltTolerant = await Plant.find({ "salt_tolerant": req.params.salt_tolerant });

  res.json(saltTolerant)
};

export const getThorny = async (req, res) => {
  let thorny = await Plant.find({ "thorny": req.params.thorny });

  res.json(thorny)
};

export const getInvasive = async (req, res) => {
  let invasive = await Plant.find({ "invasive": req.params.invasive });

  res.json(invasive)
};

export const getTropical = async (req, res) => {
  let tropical = await Plant.find({ "tropical": req.params.tropical });

  res.json(tropical)
};

export const getIndoor = async (req, res) => {
  let indoor = await Plant.find({ "indoor": req.params.indoor });

  res.json(indoor)
};

export const getLeaf = async (req, res) => {
  let leaf = await Plant.find({ "leaf": req.params.leaf })

  res.json(leaf)
};

export const getLeafColor = async (req, res) => {
  let leafColor = Plant.find({ leaf_color: req.params.leaf_color })

  res.json(leafColor)
};

export const getEdibleLeaf = async (req, res) => {
  let edibleLeaf = await Plant.find({ "edible_leaf": req.params.edible_leaf })

  res.json(edibleLeaf)
};

export const getNeedsWatering = async (req, res) => {
  let needsWatering = await Plant.find({ watering: req.params.watering.charAt(0).toUpperCase() + req.params.watering.slice(1)});

  res.json(needsWatering);
};

export const getOrigin = async (req, res) => {
  let origin = await Plant.find({ origin: req.params.origin.charAt(0).toUpperCase() + req.params.origin.slice(1) });

  res.json(origin);
};