# Description

The PlantAPI is an API database of plants with complete CRUD functionality implemented with RESTful routes of various plants and details about them as JSON data.

## Routes

### Read Routes

#### Get all plants

Get the JSON data for all plants in the database.

`GET /plants`

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
    },
    {
        "dimensions": {
            "type": "Height",
            "min_value": 30,
            "max_value": 30,
            "unit": "feet"
        },
        "hardiness": {
            "min": 6,
            "max": 6
        },
        "hardiness_location": {
            "full_url": "https://perenual.com/api/hardiness-map?species_id=22&size=og&key=sk-dVrJ64b9339eba7161622",
            "full_iframe": "<iframe frameborder=0 scrolling=yes seamless=seamless width=1000 height=550 style='margin:auto;' src='https://perenual.com/api/hardiness-map?species_id=22&size=og&key=sk-dVrJ64b9339eba7161622'></iframe>"
        },
        "watering_general_benchmark": {
            "value": "7-10",
            "unit": "days"
        },
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
            "original_url": "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/og/4847225395_2509ee2bfe_b.jpg",
            "regular_url": "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/regular/4847225395_2509ee2bfe_b.jpg",
            "medium_url": "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/medium/4847225395_2509ee2bfe_b.jpg",
            "small_url": "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/small/4847225395_2509ee2bfe_b.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/thumbnail/4847225395_2509ee2bfe_b.jpg"
        },
        "_id": "64baa251be3a60f83be238c3",
        "common_name": "Green Cascade Maple",
        "scientific_name": [
            "Acer japonicum 'Green Cascade'"
        ],
        "other_name": [],
        "family": "Sapindaceae",
        "origin": [
            "Japan"
        ],
        "type": "tree",
        "dimension": "Height:  30 feet",
        "cycle": "Perennial",
        "propagation": [
            "Air Layering Propagation",
            "Grafting Propagation",
            "Cutting",
            "Division",
            "Seed Propagation"
        ],
        "watering": "Average",
        "depth_water_requirement": [
            {
                "unit": "inches",
                "value": "2"
            }
        ],
        "volume_water_requirement": [],
        "watering_period": "night",
        "plant_anatomy": [],
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "pruning_month": [
            "February",
            "March",
            "April"
        ],
        "pruning_count": [],
        "seeds": 0,
        "maintenance": "Low",
        "care-guides": "http://perenual.com/api/species-care-guide-list?species_id=22&key=sk-dVrJ64b9339eba7161622",
        "soil": [],
        "growth_rate": "Low",
        "drought_tolerant": true,
        "salt_tolerant": false,
        "thorny": false,
        "invasive": false,
        "tropical": false,
        "indoor": false,
        "care_level": "Medium",
        "pest_susceptibility": [],
        "pest_susceptibility_api": "Coming Soon",
        "flowers": true,
        "flowering_season": "Spring",
        "flower_color": "Purplish-red",
        "cones": false,
        "fruits": false,
        "edible_fruit": false,
        "edible_fruit_taste_profile": "Coming Soon",
        "fruit_nutritional_value": "Coming Soon",
        "fruit_color": [],
        "harvest_season": null,
        "leaf": true,
        "leaf_color": [
            "bronze",
            "green"
        ],
        "edible_leaf": false,
        "cuisine": false,
        "medicinal": false,
        "poisonous_to_humans": 0,
        "poisonous_to_pets": 0,
        "description": "The Green Cascade Maple (Acer japonicum 'Green Cascade') is an amazing plant with stunning features. It has a unique cascading form which means it is slightly wider at the base and gradually narrows as it grows taller. The foliage of this tree is deep green with reddish-tinged edges in the spring and summer, transforming to a deep yellow-green in autumn. This foliage provides a beautiful contrast with the bark which is grey-brown with a light orange tone. The Green Cascade Maple is an excellent choice for a specimen tree or to provide a natural screen. It's versatile, easy to care for, and provides stunning visual appeal all year round.",
        "__v": 0
    }, ...
]
```

### Get one plant

Get the JSON data for one plant in the database.

`GET /plants/:id`

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

### Get plants by origin

Get the JSON data for all plants with the specified country or region of origin

`GET /plants/origin/:origin`

```
Status: 200

[
    {
        "dimensions": {
            "type": "Height",
            "min_value": 25,
            "max_value": 25,
            "unit": "feet"
        },
        "hardiness": {
            "min": 6,
            "max": 6
        },
        "hardiness_location": {
            "full_url": "https://perenual.com/api/hardiness-map?species_id=11&size=og&key=sk-dVrJ64b9339eba7161622",
            "full_iframe": "<iframe frameborder=0 scrolling=yes seamless=seamless width=1000 height=550 style='margin:auto;' src='https://perenual.com/api/hardiness-map?species_id=11&size=og&key=sk-dVrJ64b9339eba7161622'></iframe>"
        },
        "watering_general_benchmark": {
            "value": "3-4",
            "unit": "days"
        },
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
            "original_url": "https://perenual.com/storage/species_image/11_acer_davidii/og/6868591754_f4ac5b0510_b.jpg",
            "regular_url": "https://perenual.com/storage/species_image/11_acer_davidii/regular/6868591754_f4ac5b0510_b.jpg",
            "medium_url": "https://perenual.com/storage/species_image/11_acer_davidii/medium/6868591754_f4ac5b0510_b.jpg",
            "small_url": "https://perenual.com/storage/species_image/11_acer_davidii/small/6868591754_f4ac5b0510_b.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/11_acer_davidii/thumbnail/6868591754_f4ac5b0510_b.jpg"
        },
        "_id": "64baa251be3a60f83be23895",
        "common_name": "Snakebark Maple",
        "scientific_name": [
            "Acer davidii"
        ],
        "other_name": [
            "Father David's Maple",
            "Pere David's Maple"
        ],
        "family": "Sapindaceae",
        "origin": [
            "China",
            "Myanmar"
        ],
        "type": "tree",
        "dimension": "Height:  25 feet",
        "cycle": "Perennial",
        "propagation": [
            "Grafting Propagation",
            "Layering Propagation",
            "Cutting",
            "Seed Propagation"
        ],
        "watering": "Average",
        "depth_water_requirement": [
            {
                "unit": "inches",
                "value": "2"
            }
        ],
        "volume_water_requirement": [],
        "watering_period": null,
        "plant_anatomy": [
            {
                "part": "leaves",
                "color": [
                    "yellow-brown",
                    "green"
                ],
                "_id": "64baa251be3a60f83be23896"
            },
            {
                "part": "branches",
                "color": [
                    "green-brown",
                    "light-green",
                    "green"
                ],
                "_id": "64baa251be3a60f83be23897"
            },
            {
                "part": "trunk",
                "color": [
                    "green-brown",
                    "white-green"
                ],
                "_id": "64baa251be3a60f83be23898"
            },
            {
                "part": "stem",
                "color": [
                    "green-colored"
                ],
                "_id": "64baa251be3a60f83be23899"
            },
            {
                "part": "veins",
                "color": [
                    "light-green"
                ],
                "_id": "64baa251be3a60f83be2389a"
            }
        ],
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "pruning_month": [
            "March",
            "April"
        ],
        "pruning_count": [],
        "seeds": 0,
        "maintenance": "Low",
        "care-guides": "http://perenual.com/api/species-care-guide-list?species_id=11&key=sk-dVrJ64b9339eba7161622",
        "soil": [],
        "growth_rate": "Low",
        "drought_tolerant": true,
        "salt_tolerant": false,
        "thorny": false,
        "invasive": true,
        "tropical": false,
        "indoor": false,
        "care_level": "Medium",
        "pest_susceptibility": [],
        "pest_susceptibility_api": "Coming Soon",
        "flowers": true,
        "flowering_season": "Spring",
        "flower_color": "Yellow",
        "cones": false,
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
        "description": "The Snakebark Maple (Acer davidii) is an amazing tree, beloved by gardeners. It features beautiful gills, which are handsomely striped with tiger-like markings. In the summer, its leaves turn to a bright golden hue and its bark remains smooth, with a distinctive mottled ash-gray coloration. Plant it in a sunny spot to take full advantage of its leaves, which are said to produce a calming effect. It is also low maintenance and very tolerant of the cold, surviving through temperatures as low as -25°F. With its stunning shape and amazing color, the Snakebark Maple is a wonderful addition to any landscape!",
        "__v": 0
    },
    {
        "dimensions": {
            "type": "Height",
            "min_value": 20,
            "max_value": 20,
            "unit": "feet"
        },
        "hardiness": {
            "min": 2,
            "max": 2
        },
        "hardiness_location": {
            "full_url": "https://perenual.com/api/hardiness-map?species_id=12&size=og&key=sk-dVrJ64b9339eba7161622",
            "full_iframe": "<iframe frameborder=0 scrolling=yes seamless=seamless width=1000 height=550 style='margin:auto;' src='https://perenual.com/api/hardiness-map?species_id=12&size=og&key=sk-dVrJ64b9339eba7161622'></iframe>"
        },
        "watering_general_benchmark": {
            "value": null,
            "unit": "days"
        },
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
            "original_url": "https://perenual.com/storage/species_image/12_acer_ginnala/og/10476032513_76ca899bc4_b.jpg",
            "regular_url": "https://perenual.com/storage/species_image/12_acer_ginnala/regular/10476032513_76ca899bc4_b.jpg",
            "medium_url": "https://perenual.com/storage/species_image/12_acer_ginnala/medium/10476032513_76ca899bc4_b.jpg",
            "small_url": "https://perenual.com/storage/species_image/12_acer_ginnala/small/10476032513_76ca899bc4_b.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/12_acer_ginnala/thumbnail/10476032513_76ca899bc4_b.jpg"
        },
        "_id": "64baa251be3a60f83be2389b",
        "common_name": "Amur Maple",
        "scientific_name": [
            "Acer ginnala"
        ],
        "other_name": [],
        "family": null,
        "origin": [
            "China",
            "North Korea",
            "Russia",
            "Mongolia"
        ],
        "type": "tree",
        "dimension": "Height:  20 feet",
        "cycle": "Perennial",
        "propagation": [
            "Cutting",
            "Grafting Propagation",
            "Layering Propagation",
            "Air Layering Propagation",
            "Seed Propagation"
        ],
        "watering": "Average",
        "depth_water_requirement": [
            {
                "unit": "inch",
                "value": "1"
            }
        ],
        "volume_water_requirement": [],
        "watering_period": "morning",
        "plant_anatomy": [
            {
                "part": "leaves",
                "color": [
                    "orange-pink",
                    "green"
                ],
                "_id": "64baa251be3a60f83be2389c"
            },
            {
                "part": "veins",
                "color": [
                    "red",
                    "yellow"
                ],
                "_id": "64baa251be3a60f83be2389d"
            },
            {
                "part": "twigs",
                "color": [
                    "dark-red",
                    "green"
                ],
                "_id": "64baa251be3a60f83be2389e"
            },
            {
                "part": "trunk",
                "color": [
                    "silver"
                ],
                "_id": "64baa251be3a60f83be2389f"
            },
            {
                "part": "branches",
                "color": [
                    "silver"
                ],
                "_id": "64baa251be3a60f83be238a0"
            },
            {
                "part": "seeds",
                "color": [
                    "pink"
                ],
                "_id": "64baa251be3a60f83be238a1"
            }
        ],
        "sunlight": [
            "full sun",
            "part shade"
        ],
        "pruning_month": [
            "February",
            "February",
            "March"
        ],
        "pruning_count": [],
        "seeds": 0,
        "maintenance": null,
        "care-guides": "http://perenual.com/api/species-care-guide-list?species_id=12&key=sk-dVrJ64b9339eba7161622",
        "soil": [],
        "growth_rate": "Low",
        "drought_tolerant": true,
        "salt_tolerant": false,
        "thorny": false,
        "invasive": true,
        "tropical": false,
        "indoor": false,
        "care_level": "Moderate",
        "pest_susceptibility": [],
        "pest_susceptibility_api": "Coming Soon",
        "flowers": false,
        "flowering_season": null,
        "flower_color": "",
        "cones": false,
        "fruits": false,
        "edible_fruit": false,
        "edible_fruit_taste_profile": "Coming Soon",
        "fruit_nutritional_value": "Coming Soon",
        "fruit_color": [],
        "harvest_season": null,
        "leaf": true,
        "leaf_color": [
            "green",
            "red",
            "yellow",
            "orange"
        ],
        "edible_leaf": false,
        "cuisine": false,
        "medicinal": false,
        "poisonous_to_humans": 0,
        "poisonous_to_pets": 0,
        "description": "The Amur Maple is a beautiful and versatile species of tree that are perfect for any property. With its vibrant green buds and star-shaped leaves that turn yellow and orange in the autumn, this stunning tree makes for a spectacular backdrop in any yard or garden. Its dense growth provides ample shade and its smaller size means it won't take up too much space. The Amur Maple is also highly resilient, resistant to extreme temperatures and insect diseases and does well in most soils. This hardy and majestic tree will bring years of beauty to your lawn and garden.",
        "__v": 0
    },...
]
```

### Get plants by watering type

Get the JSON data for all plants with specified watering type (Average or Frequent)

`GET /plants/watering/:watering`

```
[
    {
        "dimensions": {
            "type": "Height",
            "min_value": 30,
            "max_value": 30,
            "unit": "feet"
        },
        "hardiness": {
            "min": 6,
            "max": 6
        },
        "hardiness_location": {
            "full_url": "https://perenual.com/api/hardiness-map?species_id=22&size=og&key=sk-dVrJ64b9339eba7161622",
            "full_iframe": "<iframe frameborder=0 scrolling=yes seamless=seamless width=1000 height=550 style='margin:auto;' src='https://perenual.com/api/hardiness-map?species_id=22&size=og&key=sk-dVrJ64b9339eba7161622'></iframe>"
        },
        "watering_general_benchmark": {
            "value": "7-10",
            "unit": "days"
        },
        "default_image": {
            "license": 5,
            "license_name": "Attribution-ShareAlike License",
            "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
            "original_url": "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/og/4847225395_2509ee2bfe_b.jpg",
            "regular_url": "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/regular/4847225395_2509ee2bfe_b.jpg",
            "medium_url": "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/medium/4847225395_2509ee2bfe_b.jpg",
            "small_url": "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/small/4847225395_2509ee2bfe_b.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/thumbnail/4847225395_2509ee2bfe_b.jpg"
        },
        "_id": "64baa251be3a60f83be238c3",
        "common_name": "Green Cascade Maple",
        "scientific_name": [
            "Acer japonicum 'Green Cascade'"
        ],
        "other_name": [],
        "family": "Sapindaceae",
        "origin": [
            "Japan"
        ],
        "type": "tree",
        "dimension": "Height:  30 feet",
        "cycle": "Perennial",
        "propagation": [
            "Air Layering Propagation",
            "Grafting Propagation",
            "Cutting",
            "Division",
            "Seed Propagation"
        ],
        "watering": "Average",
        "depth_water_requirement": [
            {
                "unit": "inches",
                "value": "2"
            }
        ],
        "volume_water_requirement": [],
        "watering_period": "night",
        "plant_anatomy": [],
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "pruning_month": [
            "February",
            "March",
            "April"
        ],
        "pruning_count": [],
        "seeds": 0,
        "maintenance": "Low",
        "care-guides": "http://perenual.com/api/species-care-guide-list?species_id=22&key=sk-dVrJ64b9339eba7161622",
        "soil": [],
        "growth_rate": "Low",
        "drought_tolerant": true,
        "salt_tolerant": false,
        "thorny": false,
        "invasive": false,
        "tropical": false,
        "indoor": false,
        "care_level": "Medium",
        "pest_susceptibility": [],
        "pest_susceptibility_api": "Coming Soon",
        "flowers": true,
        "flowering_season": "Spring",
        "flower_color": "Purplish-red",
        "cones": false,
        "fruits": false,
        "edible_fruit": false,
        "edible_fruit_taste_profile": "Coming Soon",
        "fruit_nutritional_value": "Coming Soon",
        "fruit_color": [],
        "harvest_season": null,
        "leaf": true,
        "leaf_color": [
            "bronze",
            "green"
        ],
        "edible_leaf": false,
        "cuisine": false,
        "medicinal": false,
        "poisonous_to_humans": 0,
        "poisonous_to_pets": 0,
        "description": "The Green Cascade Maple (Acer japonicum 'Green Cascade') is an amazing plant with stunning features. It has a unique cascading form which means it is slightly wider at the base and gradually narrows as it grows taller. The foliage of this tree is deep green with reddish-tinged edges in the spring and summer, transforming to a deep yellow-green in autumn. This foliage provides a beautiful contrast with the bark which is grey-brown with a light orange tone. The Green Cascade Maple is an excellent choice for a specimen tree or to provide a natural screen. It's versatile, easy to care for, and provides stunning visual appeal all year round.",
        "__v": 0
    },
    {
        "dimensions": {
            "type": "Height",
            "min_value": 20,
            "max_value": 20,
            "unit": "feet"
        },
        "hardiness": {
            "min": 6,
            "max": 6
        },
        "hardiness_location": {
            "full_url": "https://perenual.com/api/hardiness-map?species_id=27&size=og&key=sk-dVrJ64b9339eba7161622",
            "full_iframe": "<iframe frameborder=0 scrolling=yes seamless=seamless width=1000 height=550 style='margin:auto;' src='https://perenual.com/api/hardiness-map?species_id=27&size=og&key=sk-dVrJ64b9339eba7161622'></iframe>"
        },
        "watering_general_benchmark": {
            "value": null,
            "unit": "days"
        },
        "default_image": {
            "license": 45,
            "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
            "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
            "original_url": "https://perenual.com/storage/species_image/27_acer_palmatum/og/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
            "regular_url": "https://perenual.com/storage/species_image/27_acer_palmatum/regular/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
            "medium_url": "https://perenual.com/storage/species_image/27_acer_palmatum/medium/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
            "small_url": "https://perenual.com/storage/species_image/27_acer_palmatum/small/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg",
            "thumbnail": "https://perenual.com/storage/species_image/27_acer_palmatum/thumbnail/2560px-Acer_palmatum_27Bloodgood27_kz01.jpg"
        },
        "_id": "64baa251be3a60f83be238da",
        "common_name": "Japanese Maple",
        "scientific_name": [
            "Acer palmatum"
        ],
        "other_name": [],
        "family": "Sapindaceae",
        "origin": [
            "Korea",
            "Japan"
        ],
        "type": "tree",
        "dimension": "Height:  20 feet",
        "cycle": "Perennial",
        "propagation": [
            "Air Layering Propagation",
            "Grafting Propagation",
            "Cutting",
            "Seed Propagation"
        ],
        "watering": "Average",
        "depth_water_requirement": [],
        "volume_water_requirement": [],
        "watering_period": "morning",
        "plant_anatomy": [],
        "sunlight": [
            "Full sun",
            "part shade"
        ],
        "pruning_month": [
            "February",
            "March",
            "April"
        ],
        "pruning_count": [],
        "seeds": 1,
        "maintenance": "Low",
        "care-guides": "http://perenual.com/api/species-care-guide-list?species_id=27&key=sk-dVrJ64b9339eba7161622",
        "soil": [
            "Well-drained"
        ],
        "growth_rate": "Low",
        "drought_tolerant": false,
        "salt_tolerant": false,
        "thorny": false,
        "invasive": false,
        "tropical": false,
        "indoor": false,
        "care_level": "Moderate",
        "pest_susceptibility": [
            "Anthracnose",
            " Canker",
            "sap rot",
            " Caterpillar",
            "cutworm",
            " Mildew",
            " Wilt",
            "  Pest resistant",
            " Disease resistant",
            " Rabbit resistant "
        ],
        "pest_susceptibility_api": "Coming Soon",
        "flowers": true,
        "flowering_season": "Spring",
        "flower_color": "Reddish-purple",
        "cones": false,
        "fruits": true,
        "edible_fruit": false,
        "edible_fruit_taste_profile": "Coming Soon",
        "fruit_nutritional_value": "Coming Soon",
        "fruit_color": [
            "green",
            "red",
            "yellow",
            "purple",
            "orange",
            "maroon",
            "burgundy"
        ],
        "harvest_season": "Fall",
        "leaf": true,
        "leaf_color": [
            "green",
            "red",
            "yellow",
            "purple",
            "orange"
        ],
        "edible_leaf": false,
        "cuisine": false,
        "medicinal": true,
        "poisonous_to_humans": 0,
        "poisonous_to_pets": 0,
        "description": "The Japanese Maple, or Acer Palmatum, is a beautiful small tree and an amazing addition to any landscape. Its delicate foliage offers an incredible range of colors, from vibrant reds to deep greens throughout the growing season. In the fall, its leaves turn yellow and oranges, and finally bronze. With its intricate branches and vibrant colors, it is a sight to behold. This species is also preferred for its versatility, as it grows well in both container gardens and in large outdoor spaces. Its petite size makes it an ideal choice for a variety of settings, making it a great all-around choice for any garden.",
        "__v": 0
    },...
]
```

### Get plants with leaves

Get the JSON data for all plants with leaves

`GET /plants/leaf`

`GET /plants/leaf/:leaf_color`

`GET /plants/edible_leaf`

`GET /plants/drought_tolerant`

`GET /plants/salt_tolerant`

`GET /plants/thorny`

`GET /plants/invasive`

`GET /plants/tropical`

`GET /plants/indoor`

### Create Route
`POST /plants`

### Update Route
`PUT /plants/:id`

### Delete Route
`DELETE /plants/:id`