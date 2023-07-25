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
      return res.status(200).send("Plant deleted!");
    }

    throw new Error("Plant not found");
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