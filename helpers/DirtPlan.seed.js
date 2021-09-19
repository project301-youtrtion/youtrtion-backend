'use strict';

const dietModel = require('../models/DietPlan.model');

const seedBook = () => {


    const firstUser = new dietModel({
        gender: 'female',
        height: '170',
        weight: '59',
        age: '25',
        activety: '1.14',
        email: 'salsabilmislat196@gmail.com',

    });
    firstUser.save();
   
    const secondtUser = new dietModel({
        gender: 'male',
        height: '170',
        weight: '80',
        age: '31',
        activety: '1.14',
        email: 'ahmadhamzh@ymail.com',

    });
    secondtUser.save();
    console.log("Data seeded!");
}



module.exports = seedBook;