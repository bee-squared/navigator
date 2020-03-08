const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Connected to the '${db.name}' DB on port ${db.port}`);
});

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  date: {type: Date},
  sport: String,
  duration_hours: Number,
  duration_minutes: Number,
  distance: Number,
  elevation: Number,
  location: String,
  rating: Number,
  photo: String,
  lat: Number,
  lng: Number,
  timezone: Number,
  weather: {summary: String, icon: String, sunriseTime: Number, sunsetTime: Number, temperatureMin: Number, temperatureMax: Number, windSpeed: Number, windBearing: Number}
})

const activityModel = mongoose.model('activity', activitySchema);

module.exports = {
  activityModel,
}