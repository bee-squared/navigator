const mongoose = require('mongoose');
const activity = require('./queries/activity/activities')
mongoose.connect('mongodb://localhost/navigator', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Connected to the '${db.name}' DB on port ${db.port}`);
  const activitySchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    date: Date,
    sport: String,
    duration_hours: Number,
    duration_minutes: Number,
    distance: Number,
    elevation: Number,
    location: String,
    rating: Number
  })
  const activityModel = mongoose.model('activity', activitySchema);

  const a1 = new activityModel({
    title: "test activity",
    description: "some description",
    date: Date.now(),
    sport: "Ride",
    duration_hours: 3,
    duration_minutes: 52,
    distance: 71.6,
    elevation: 6100,
    location: "Boulder",
    Rating: 5,
  });
  a1.save();
});