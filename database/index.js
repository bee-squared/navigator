const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/navigator', {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Connected to the '${db.name}' DB on port ${db.port}`);
});

const activitySchema = new mongoose.Schema({
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

module.exports = {
  activityModel,
}