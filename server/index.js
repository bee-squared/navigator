require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');
const routes = require('./routes.js');

const port = process.env.REACT_APP_API_PORT;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {console.log(`The server is up and running on port: ${port}`)});