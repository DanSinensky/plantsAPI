# Description

The PlantAPI is an API database of plants with complete CRUD functionality implemented with RESTful routes of various plants and details about them as JSON data.

## Entry

Entries contain most of the following data points:

Field | Type | Description | Query Example
------|------|-------------|--------------
Dimensions|String|Primary dimension of measurement with value and units|?dimensions=Height:  60 feet
Type (of dimension)|String|Direction of the dimension|?dimensions.type=Height
Min_value (of dimension)|Number|Minimun value of dimension|?dimensions.min_value=60
Max_value (of dimension)|Number|Maximun value of dimension|?dimensions.max_value=60
Unit (of dimension)|String|Unit of measurement of the dimension|?dimensions.unit=feet
Min (value of hardiness)|Number|Minimum value of hardiness range of plant|?hardiness.min=7
Max (value of hardiness)|Number|Maximum value of hardiness range of plant|?hardiness.max=7
Value (of watering general benchmark)|String|How often the plant should be watered (unitless)|?watering_general_benchmark.value=7-10
Unit (of watering general benchmark)|String|Unit of how often the plant should be watered|?watering_general_benchmark.unit=days
Default image license number|Number|License number that the image uses|?default_image.license=45
Default image license name|String|License name that the image uses|?default_image.license_name=Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
Default image license url|String|URL where the image license can be found and read|?default_image.license_url=https://creativecommons.org/licenses/by-sa/3.0/deed.en
Default image original url|String|URL of the original image|?default_image.original_url=https://perenual.com/storage/species_image/1_abies_alba/og/1536px-Abies_alba_SkalitC3A9.jpg
Default image regular url|String|URL of the regular image|?default_image.regular_url=https://perenual.com/storage/species_image/1_abies_alba/regular/1536px-Abies_alba_SkalitC3A9.jpg
Default image medium url|String|URL of the medium image|?default_image.medium_url=https://perenual.com/storage/species_image/1_abies_alba/medium/1536px-Abies_alba_SkalitC3A9.jpg
Default image small url|String|URL of the small image|?default_image.small_url=https://perenual.com/storage/species_image/1_abies_alba/small/1536px-Abies_alba_SkalitC3A9.jpg
Default image thumbnail url|String|URL of the thumbnail|?default_image.thumbnail=https://perenual.com/storage/species_image/1_abies_alba/thumbnail/1536px-Abies_alba_SkalitC3A9.jpg
ID|String|Unique ID of the entry|?_id=64baa251be3a60f83be23864
Common name|String|Common name of the plant|?common_name=European Silver Fir
Scientific name(s)|String|Scientific name(s) of the plant|?scientific_name=Abies alba
Other name(s)|String|Other name(s) of the plant|?other_name=Common Silver Fir
Family|String|Family that this genus of plant belongs to|?family=Pinaceae
Origin|String|Country or region that this plant originates from|?origin=Austria
Type|String|Type of plant|?type=tree
Cycle|String|How often this plant reproduces sexually|?cycle=Perennial
Propagation|String|How this plant is propagated by people|?propagation=Cutting
Watering|String|How often this plant needs to be watered|?watering=Frequent
Unit of depth of water requirement|String|Unit of measurement for how deeply the plant needs to be watered|?depth_water_requirement.unit=inches
Value of depth of water requirement|String|(Unitless) value for how deeply the plant needs to be watered|?depth_water_requirement.value=2
Unit of volume of water requirement|String|Unit of measurement for the quantity of water the plant needs|?volume_water_requirement.unit=gallons
Value of volume of water requirement|String|(Unitless) value for the quantity of water the plant needs|?volume_water_requirement.value=2
Watering period|String|What time of day the plant should be watered|?watering_period=morning
Plant anatomy by part|String|Plant part that the plant contains|?plant_anatomy.part=leaves
Plant anatomy by color|String|Plant with a part of that color|?plant_anatomy.color=green
Sunlight|String|Sunlight type that the plant grows best in|?sunlight=full sun
Pruning month|String|Month that falls within the optimal pruning period for this plant|?pruning_month=February
Pruning count amount|Number|(Unitless) number of times to prune the plant|?pruning_count.amount=1
Pruning count interval|String|Interval at which the amount of times the plant is pruned|?pruning_count.interval=yearly
Maintenance level|String|How much maintenance the plant requires|?maintenance=Low
Soil|String|What type of soil the plant needs|?soil=Loamy
Growth rate|String|How fast the plant grows|?growth_rate=High
Drought tolerance|Boolean|If the plant can tolerate periods of low water|?drought_tolerant=false
Salt tolerance|Boolean|If the plant can tolerate salt|?salt_tolerant=false
Thorny|Boolean|If the plant is thorny|?thorny=false
Invasive|Boolean|If the plant is invasive to a region|?invasive=false
Tropical|Boolean|If the plant grows in tropical regions|?tropical=false
Indoor|Boolean|If the plant can be grown indoors|?indoor=false
Care level|String|How much care the plant requires|?care_level=Medium
Pest susceptibility|String|What pests the plant is susceptible to|?pest_susceptibility=Aphids
Flowers|Boolean|If the plant grows flowers|?flowers=true
Flowering season|String|What season the plant flowers in|?flowering_season=Spring
Flower color|String|What color the plant's flowers are|?flower_color=Yellow
Cones|Boolean|If the plant grows cones|?cones=false
Fruits|Boolean|If the plant grows fruit|?fruits=true
Fruit color|String|What color the plant's fruits are|?

![An image of an entry in the Plants API](https://raw.githubusercontent.com/DanSinensky/plantsAPI/main/PlantsAPIEntry.png "Plants API entry")


## Routes

### Read Routes

#### Get all plants

Get the JSON data for all plants in the database.

`GET /plants`

Response

```
[{
        "fruit_color": [],
        "harvest_season": null,
        "leaf": true,
        "leaf_color": [
            "green"
        ],
        "edible_leaf": false,
        "cuisine": false,
        "medicinal": true,
        "poisonous_to_humans": 0,
        "poisonous_to_pets": 0,
        "description": "European Silver Fir (Abies alba) is an amazing coniferous species native to mountainous regions of central Europe and the Balkans. It is an evergreen tree with a narrow, pyramidal shape and long, soft needles. Its bark is scaly grey-brown and its branches are highly ornamental due to its conical-shaped silver-tinged needles. It is pruned for use as an ornamental evergreen hedging and screening plant, and is also popular for use as a Christmas tree. Young trees grow quickly and have strong, flexible branches which makes them perfect for use as windbreaks. The European Silver Fir is an impressive species, making it ideal for gardens and public spaces.",
        "__v": 0
    }, ...
]
```

#### Get one plant

Get the JSON data for one plant in the database, where "id" is the 24 digit value of the "_id" key.

`GET /plants/id`

Response
```
Status: 200

[
    {
        "dimensions": {
            "type": "Height",
            "min_value": 60,
            "max_value": 60,
            "unit": "feet"
        },
        "hardiness": {
            "min": 7,
            "max": 7
        },
        "hardiness_location": {
            "full_url": "https://perenual.com/api/hardiness-map?species_id=1&size=og&key=sk-dVrJ64b9339eba7161622",
            "full_iframe": "<iframe frameborder=0 scrolling=yes seamless=seamless width=1000 height=550 style='margin:auto;' src='https://perenual.com/api/hardiness-map?species_id=1&size=og&key=sk-dVrJ64b9339eba7161622'></iframe>"
        },
        "watering_general_benchmark": {
            "value": "7-10",
            "unit": "days"
        },
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
            "original_url": "https://perenual.com/storage/species_image/1_abies_alba/og/1536px-Abies_alba_SkalitC3A9.jpg",
            "regular_url": "https://perenual.com/storage/species_image/1_abies_alba/regular/1536px-Abies_alba_SkalitC3A9.jpg",
            "medium_url": "https://perenual.com/storage/species_image/1_abies_alba/medium/1536px-Abies_alba_SkalitC3A9.jpg",
            "small_url": "https://perenual.com/storage/species_image/1_abies_alba/small/1536px-Abies_alba_SkalitC3A9.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/1_abies_alba/thumbnail/1536px-Abies_alba_SkalitC3A9.jpg"
        },
        "_id": "64baa251be3a60f83be23864",
        "common_name": "European Silver Fir",
        "scientific_name": [
            "Abies alba"
        ],
        "other_name": [
            "Common Silver Fir"
        ],
        "family": null,
        "origin": [
            "Austria",
            "Germany",
            "Switzerland",
            "France",
            "Italy",
            "Slovenia",
            "Croatia",
            "Bosnia and Herzegovina",
            "Serbia",
            "Montenegro",
            "Albania",
            "Bulgaria",
            "Romania",
            "Ukraine",
            "Poland",
            "Czech Republic",
            "Slovakia",
            "Hungary"
        ],
        "type": "tree",
        "dimension": "Height:  60 feet",
        "cycle": "Perennial",
        "propagation": [
            "Cutting",
            "Grafting Propagation",
            "Layering Propagation",
            "Seed Propagation",
            "Air Layering Propagation",
            "Tissue Culture"
        ],
        "watering": "Frequent",
        "depth_water_requirement": [],
        "volume_water_requirement": [],
        "watering_period": null,
        "plant_anatomy": [],
        "sunlight": [
            "full sun"
        ],
        "pruning_month": [
            "February",
            "March",
            "April"
        ],
        "pruning_count": [],
        "seeds": 0,
        "maintenance": null,
        "care-guides": "http://perenual.com/api/species-care-guide-list?species_id=1&key=sk-dVrJ64b9339eba7161622",
        "soil": [],
        "growth_rate": "High",
        "drought_tolerant": false,
        "salt_tolerant": false,
        "thorny": false,
        "invasive": false,
        "tropical": false,
        "indoor": false,
        "care_level": "Medium",
        "pest_susceptibility": [],
        "pest_susceptibility_api": "Coming Soon",
        "flowers": false,
        "flowering_season": null,
        "flower_color": "",
        "cones": true,
        "fruits": false,
        "edible_fruit": false,
        "edible_fruit_taste_profile": "Coming Soon",
        "fruit_nutritional_value": "Coming Soon",
        "fruit_color": [],
        "harvest_season": null,
        "leaf": true,
        "leaf_color": [
            "green"
        ],
        "edible_leaf": false,
        "cuisine": false,
        "medicinal": true,
        "poisonous_to_humans": 0,
        "poisonous_to_pets": 0,
        "description": "European Silver Fir (Abies alba) is an amazing coniferous species native to mountainous regions of central Europe and the Balkans. It is an evergreen tree with a narrow, pyramidal shape and long, soft needles. Its bark is scaly grey-brown and its branches are highly ornamental due to its conical-shaped silver-tinged needles. It is pruned for use as an ornamental evergreen hedging and screening plant, and is also popular for use as a Christmas tree. Young trees grow quickly and have strong, flexible branches which makes them perfect for use as windbreaks. The European Silver Fir is an impressive species, making it ideal for gardens and public spaces.",
        "__v": 0
    }
]
```

#### Get plants by query values

TODO TODO TODO

### Create Route

#### Create one plant

Create a new plant by inputting JSON data with appropriate key-value pairs. 

`POST /plants`

```
{
  "dimensions": {
            "type": String,
            "min_value": Number,
            "max_value": Number,
            "unit": String
        },
        "hardiness": {
            "min": Number,
            "max": Number
        },
        "hardiness_location": {
            "full_url": String,
            "full_iframe": String
        },
        "watering_general_benchmark": {
            "value": String,
            "unit": String
        },
        "default_image": {
            "license": Numbers,
            "license_name": String,
            "license_url": String,
            "original_url": String,
            "regular_url": String,
            "medium_url": String,
            "small_url": String,
            "thumbnail": String
        },
        "common_name": String,
        "scientific_name": [String],
        "other_name": [String],
        "family": String,
        "origin": [String],
        "type": String,
        "dimension": String
        "cycle": String,
        "propagation": [String],
        "watering": String,
        "depth_water_requirement": {
          "unit": String,
          "value": String
        },
        "volume_water_requirement": {
          "unit": String,
          "value": String
        },
        "watering_period": String,
        "plant_anatomy": [
          {
            "part": String,
            "color": [String]
          }
        ],
        "sunlight": [String],
        "pruning_month": [String],
        "pruning_count":   {
          "amount": Number,
          "interval": String
        },
        "seeds": Number,
        "maintenance": String,
        "care-guides": String,
        "soil": [String],
        "growth_rate": String,
        "drought_tolerant": Boolean,
        "salt_tolerant": Boolean,
        "thorny": Boolean,
        "invasive": Boolean,
        "tropical": Boolean,
        "indoor": Boolean,
        "care_level": String,
        "pest_susceptibility": [String],
        "pest_susceptibility_api": String,
        "flowers": Boolean,
        "flowering_season": String,
        "flower_color": String
        "cones": Boolean,
        "fruits": Boolean,
        "edible_fruit": Boolean,
        "edible_fruit_taste_profile": String,
        "fruit_nutritional_value": String,
        "fruit_color": [String],
        "harvest_season": String,
        "leaf": Boolean,
        "leaf_color": [String],
        "edible_leaf": Boolean,
        "cuisine": Boolean,
        "medicinal": Boolean,
        "poisonous_to_humans": Number,
        "poisonous_to_pets": Number,
        "description": String
}
```

### Update Route

#### Update one plant

Update the JSON data for one plant in the database, where "id" is the 24 digit value of the "_id" key.

`PUT /plants/id`



### Delete Route

#### Delete one plant

`DELETE /plants/id`

Delete the JSON data for one plant in the database, where "id" is the 24 digit value of the "_id" key.

```
Plant deleted!
```

## Resources
- [Plant API](https://perenual.com/docs/api)
- [Mongoose](https://mongoosejs.com/)
- [Express](https://expressjs.com/)
- [Morgan](https://github.com/expressjs/morgan)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Chalk](https://www.npmjs.com/package/chalk)
- [Node](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/)
- [VS Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/)
- [JSON](https://www.json.org/json-en.html)
- [JSON Viewer Google Chrome Extenstion](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US)