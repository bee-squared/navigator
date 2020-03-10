require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');
const routes = require('./routes.js');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);
app.use(express.static('public'));

app.listen(PORT, () => {console.log(`The server is up and running on port: ${PORT}`)});
