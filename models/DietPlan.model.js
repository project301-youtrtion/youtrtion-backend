'use strict';
const mongoose = require('mongoose');

const dietPlanSchema = new mongoose.Schema({

    gender: { type: String },
    height: { type: String },
    weight: { type: String },
    age: { type: String },
    activety: { type: String },
    email: { type: String },
    // recipe: { any: [{}] }

})
const dietModel = mongoose.model('ourinfo', dietPlanSchema);

module.exports = dietModel;