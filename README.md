# Description

The Plants API is an API database of plants with complete CRUD functionality implemented with RESTful routes of various plants and details about them as JSON data.

## Entry

Entries contain most of the following data points:

Field | Type | Description | Query Example
------|------|-------------|--------------
Dimensions|String|Primary dimension of measurement with value and units|?dimensions=Height:%20%2060%20feet
Type (of dimension)|String|Direction of the dimension|?dimensions.type=Height
Min_value (of dimension)|Number|Minimun value of dimension|?dimensions.min_value=60
Max_value (of dimension)|Number|Maximun value of dimension|?dimensions.max_value=60
Unit (of dimension)|String|Unit of measurement of the dimension|?dimensions.unit=feet
Min (value of hardiness)|Number|Minimum value of hardiness range of plant|?hardiness.min=7
Max (value of hardiness)|Number|Maximum value of hardiness range of plant|?hardiness.max=7
Value (of watering general benchmark)|String|How often the plant should be watered (unitless)|?watering_general_benchmark.value=7-10
Unit (of watering general benchmark)|String|Unit of how often the plant should be watered|?watering_general_benchmark.unit=days
Default image license number|Number|License number that the image uses|?default_image.license=45
Default image license name|String|License name that the image uses|Not recommended
Default image license url|String|URL where the image license can be found and read|Not recommended
Default image original url|String|URL of the original image|Not recommended
Default image regular url|String|URL of the regular image|Not recommended
Default image medium url|String|URL of the medium image|Not recommended
Default image small url|String|URL of the small image|Not recommended
Default image thumbnail url|String|URL of the thumbnail|Not recommeded
ID|String|Unique ID of the entry|?_id=64baa251be3a60f83be23864
Common name|String|Common name of the plant|?common_name=European%20Silver%20Fir
Scientific name(s)|String|Scientific name(s) of the plant|?scientific_name=Abies%20alba
Other name(s)|String|Other name(s) of the plant|?other_name=Common%20Silver%20Fir
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
Sunlight|String|Sunlight type that the plant grows best in|?sunlight=full%20sun
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
Fruit color|String|What color the plant's fruits are|?fruit_color=green
Harvest season|String|What season the fruit is harvested in|?harvest_season=Fall
Leaf|Boolean|If the plant grows leaves|?leaf=true
Leaf color|String|What color the plant's leaves are|?leaf_color=green
Edible leaf|Boolean|If the plant's leaves are edible|?edible_leaf=false
Medicinal|Boolean|If the plant is used for medicinal purposes|?medicinal=true
Description|String|A description of the plant|Not recommended

Here is an example of an entry in the Plants API

![An image of an entry in the Plants API](https://raw.githubusercontent.com/DanSinensky/plantsAPI/main/PlantsAPIEntry.png "Plants API entry")

## Installation

1. Fork and clone this repository to your local computer.
2. Initialize npm in the root directory of this repository by typing `npm i -y` in the terminal
3. Still in the root directory, type `npm install` followed by the names of all of the dependencies (with spaces in between) listed in the package.json file in the terminal.
4. In the root directory, type `npm run db:seed` in the terminal to seed the local database.
5. Type `npm run dev` in the terminal while in the root directory to make the API usable via the local host (http://localhost:3000/plants in the browser).

## Routes

### Read Routes

#### Get all plants

Get the JSON data for all plants in the database. Use in the browser or as a GET request in Postman.

`https://plants-api-lemon.vercel.app/plants`

#### Get one plant

Get the JSON data for one plant in the database, where "id" is the 24 digit value of the "_id" key. Use in the browser or as a GET request in Postman.

`https://plants-api-lemon.vercel.app/plants/id`


#### Get plants by query values

Get the JSON data for all plants that meet the value(s) of the queried key(s). Link queries with an `&`. Use in the browser or as a GET request in Postman.

`https://plants-api-lemon.vercel.app/plants?plant_anatomy.part=trunk`
`https://plants-api-lemon.vercel.app/plants?plant_anatomy.part=trunk&watering=Average`
`https://plants-api-lemon.vercel.app/plants?plant_anatomy.part=trunk&plant_anatomy.part=branches`

### Create Route

#### Create one plant

Create a new plant by inputting JSON data with appropriate key-value pairs. For data points that you do not include a key-value pair, the default ('' for strings, 0 for numbers, and false for booleans) will be provided. Use as a POST request in Postman, then select "Body", "raw", and "JSON" to enter data as a JSON object.

`https://plants-api-lemon.vercel.app/plants`

### Update Route

#### Update one plant

Update the JSON data for one plant in the database, where "id" is the 24 digit value of the "_id" key. Use as a PUT request in Postman, then select "Body", "raw", and "JSON" to enter data as a JSON object.

`https://plants-api-lemon.vercel.app/plants/id`

### Delete Route

#### Delete one plant

`https://plants-api-lemon.vercel.app/plants/id`

Delete the JSON data for one plant in the database, where "id" is the 24 digit value of the "_id" key. Use a DELETE request in Postman.

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