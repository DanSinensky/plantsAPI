import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Plant = new Schema({
  "common_name": { type: String },
  "scientific_name": [
    { type: String }
  ],
  "other_name": [
    { type: String }
  ],
  "cycle": { type: String },
  "watering": { type: String },
  "sunlight": [
    { type: String }
  ],
  "default_image": {
  "license": { type: Number },
  "license_name": { type: String },
  "license_url": { type: String },
  "original_url": { type: String },
  "regular_url": { type: String },
  "medium_url": { type: String },
  "small_url": { type: String },
  "thumbnail": { type: String }
  }
  });

export default mongoose.model("plants", Plant);