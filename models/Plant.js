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
"family": { type: String },
"origin": [
  { type: String }
],
"type": { type: String },
"dimension": { type: String },
"dimensions": {
"type": { type: String },
"min_value": { type: Number },
"max_value": { type: Number },
"unit": { type: String }
},
"cycle": { type: String },
"propagation": [
  { type: String }
],
"hardiness": {
"min": { type: Number },
"max": { type: Number }
},
"hardiness_location": {
"full_url": { type: String },
"full_iframe": { type: String }
},
"watering": { type: String },
  "depth_water_requirement": [],
"volume_water_requirement": [],
"watering_period": { type: String },
"watering_general_benchmark": {
"value": { type: String },
"unit": { type: String }
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
"seeds": { type: Number },
"maintenance": { type: String },
"care-guides": { type: String },
"soil": [
  { type: String }
],
"growth_rate": { type: String },
"drought_tolerant": { type: Boolean },
"salt_tolerant": { type: Boolean },
"thorny": { type: Boolean },
"invasive": { type: Boolean },
"tropical": { type: Boolean },
"indoor": { type: Boolean },
"care_level": { type: String },
"pest_susceptibility": [
  { type: String }
],
"pest_susceptibility_api": { type: String },
"flowers": { type: Boolean },
"flowering_season": { type: String },
"flower_color": { type: String },
"cones": { type: Boolean },
"fruits": { type: Boolean },
"edible_fruit": { type: Boolean },
"edible_fruit_taste_profile": { type: String },
"fruit_nutritional_value": { type: String },
"fruit_color": [
    { type: String }
],
"harvest_season": { type: String },
"leaf": { type: Boolean },
"leaf_color": [
  { type: String }
],
"edible_leaf": { type: Boolean },
"cuisine": { type: Boolean },
"medicinal": { type: Boolean },
"poisonous_to_humans": { type: Number },
"poisonous_to_pets": { type: Number },
"description": { type: String },
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