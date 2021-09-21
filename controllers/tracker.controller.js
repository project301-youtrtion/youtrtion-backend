'use strict';

const app_id = process.env.nutrition_API_app_id;
const app_key = process.env.nutrition_API_app_key;
const axios = require('axios')


const getTracker = async (request, respond) => {
    const item = request.query.ingr;
    console.log(item)

    const UrlForItem = "https://api.edamam.com/api/nutrition-data"

    const getItem = await axios.get(`${UrlForItem}?app_id=${app_id}&app_key=${app_key}&nutrition-type=logging&ingr=${item}`)

    respond.json(getItem.data)


}

module.exports = getTracker