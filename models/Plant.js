import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Plant = new Schema({
  "common_name": { type: String, default: '' },
  "scientific_name": [
    { type: String }
  ],
  "other_name": [
    { type: String }
  ],
  "family": { type: String, default: '' },
  "origin": [
    { type: String }
  ],
  "type": { type: String, default: '' },
  "dimension": { type: String, default: '' },
  "dimensions": {
    "type": { type: String, default: '' },
    "min_value": { type: Number, default: 0 },
    "max_value": { type: Number, default: 0 },
    "unit": { type: String, default: '' }
  },
  "cycle": { type: String, default: '' },
  "propagation": [
    { type: String }
  ],
  "hardiness": {
    "min": { type: Number, default: 0 },
    "max": { type: Number, default: 0 }
  },
  "watering": { type: String, default: '' },
  "depth_water_requirement": [],
  "volume_water_requirement": [],
  "watering_period": { type: String, default: '' },
  "watering_general_benchmark": {
    "value": { type: String, default: '' },
    "unit": { type: String, default: '' }
  },
  "plant_anatomy": [
    {
      "part": { type: String },
      "color": [
        { type: String }
      ]
    },
    {
      "part": { type: String },
      "color": [
        { type: String }
      ]
    },
    {
      "part": { type: String },
      "color": [
        { type: String }
      ]
    },
    {
      "part": { type: String },
      "color": [
        { type: String }
      ]
    },
    {
      "part": { type: String },
      "color": [
        { type: String }
      ]
    }
  ],
  "sunlight": [
    { type: String }
  ],
  "pruning_month": [
    { type: String }
  ],
  "pruning_count": [],
  "maintenance": { type: String, default: '' },
  "soil": [
    { type: String }
  ],
  "growth_rate": { type: String, default: '' },
  "drought_tolerant": { type: Boolean, default: false },
  "salt_tolerant": { type: Boolean, default: false },
  "thorny": { type: Boolean, default: false },
  "invasive": { type: Boolean, default: false },
  "tropical": { type: Boolean, default: false },
  "indoor": { type: Boolean, default: false },
  "care_level": { type: String, default: '' },
  "pest_susceptibility": [
    { type: String }
  ],
  "flowers": { type: Boolean, default: false },
  "flowering_season": { type: String, default: '' },
  "flower_color": { type: String, default: '' },
  "cones": { type: Boolean, default: false },
  "fruits": { type: Boolean, default: false },
  "edible_fruit": { type: Boolean, default: false },
  "fruit_color": [
    { type: String }
  ],
  "harvest_season": { type: String, default: '' },
  "leaf": { type: Boolean, default: false },
  "leaf_color": [
    { type: String }
  ],
  "edible_leaf": { type: Boolean, default: false },
  "medicinal": { type: Boolean, default: false },
  "description": { type: String, default: '' },
  "default_image": {
    "license": { type: Number, default: 0 },
    "license_name": { type: String, default: '' },
    "license_url": { type: String, default: '' },
    "original_url": { type: String, default: '' },
    "regular_url": { type: String, default: '' },
    "medium_url": { type: String, default: '' },
    "small_url": { type: String, default: '' },
    "thumbnail": { type: String, default: '' }
  }
});

export default mongoose.model("plants", Plant);