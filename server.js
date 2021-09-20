'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const getTracker =require('./controllers/tracker.controller')
const getNews=require('./controllers/news.controller')

const PORT = process.env.PORT;


app.get("/tracker",getTracker)
app.get('/news',getNews)

app.listen(PORT, () => console.log(`listening on ${PORT}`));