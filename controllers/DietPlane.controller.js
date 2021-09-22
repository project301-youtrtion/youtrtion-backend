'use strict';
const { request, response } = require('express');
const dietModel = require('../models/DietPlan.model');


const getDiteInfo = (request, response) => {
    try {
        dietModel.find({ email: request.query.email }, (error, DietData) => {
            if (error) {
                response.send(error);
            }
            response.json(DietData)
        });
    } catch (error) {
        response.send(error);
    }
};

const AddInfo = (request, response) => {

    const { gender, height, weight, age, activety, email } = request.body;
    const newUser = new dietModel({
        gender, height, weight, age, activety, email
    })
    newUser.save();
    response.json(newUser);

};
const UpdateInfo = (request, response) => {

    const { gender, height, weight, age, activety, email } = request.body;
    const userId=request.params.user_id;
    dietModel.findByIdAndUpdate({_id:userId},{ gender, height, weight, age, activety, email },{new:true} ,(error,updatedUserData)=>{
        response.json(updatedUserData)
    });
}


module.exports = { getDiteInfo, AddInfo, UpdateInfo }