'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;





app.listen(PORT, () => console.log(`listening on ${PORT}`));