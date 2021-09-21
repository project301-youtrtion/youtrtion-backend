'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const getTracker =require('./controllers/tracker.controller')
const getNews=require('./controllers/news.controller')



const { getDiteInfo, AddInfo,UpdateInfo } = require('./controllers/DietPlane.controller');
const seedBook = require('./helpers/DirtPlan.seed');
// seedBook();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);


app.get("/tracker",getTracker)
app.get('/news',getNews)


app.get('/diet', getDiteInfo);
app.post('/diet', AddInfo);
app.put('/diet/:user_id',UpdateInfo)


app.listen(PORT, () => console.log(`listening on ${PORT}`));