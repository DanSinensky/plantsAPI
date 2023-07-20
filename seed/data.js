import db from "../db/connection.js";
import Plant from "../models/Plant.js";
import plants from "./plants.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();
  await Plant.create(plants);
  console.log("Plants created!");
  await db.close();
};

insertData();