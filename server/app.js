require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes.js');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);
app.use(express.static('build'));

app.listen(PORT, () => {console.log(`The server is up and running on port: ${PORT}`)});
