const db = require('../../index.js');
const fetch = require('node-fetch');


const getAllActivities = function() {
  try {
    return db.activityModel.find({}).sort('-date');
  }
  catch(e) {
    return 400;
  }
}

const getActiveDays = function(year) {
  try {
    return db.activityModel.countDocuments({'date': { $gt: new Date(`${getCurrentYear()-1}-12-31`) }})
  }
  catch(e) {
    return 400;
  }
}

const getRecommendations = function(queryParams) {
  try {
    // set up thresholds and query paramaters
    if (queryParams.elevation) {
      const elevationThreshold = 300;
      const elevationLow = Number.parseInt(queryParams.elevation) - elevationThreshold;
      const elevationHigh = Number.parseInt(queryParams.elevation) + elevationThreshold;

      queryParams.elevation = {$gte: elevationLow, $lte: elevationHigh}
    }
    if (queryParams.distance) {
      const distanceThreshold = 5;
      const distanceLow = Number.parseInt(queryParams.distance) - distanceThreshold;
      const distanceHigh = Number.parseInt(queryParams.distance) + distanceThreshold;
      queryParams.distance = {$gte: distanceLow, $lte: distanceHigh}
    }

    if (queryParams.location) {
      queryParams.location = { $regex: queryParams.location, $options: 'i' }
    }
    console.log(queryParams)
    return db.activityModel.find(queryParams)
  }
  catch(e) {
    return 400;
  }
}

const addActivity = function(activity) {
  const newActivity = new db.activityModel(activity);
  try {
    fetch(`https://api.darksky.net/forecast/${process.env.REACT_APP_API_DARKSKY}/${activity.lat},${activity.lng},${activity.date}T12:00:00Z?exclude=currently,minutely,hourly,alerts`)
     .then(res => res.json())
     .then(weather => console.log(weather.daily.data.tem));
    // return newActivity.save()
    // .then(() => 201);
  }
  catch(e) {
    return 400;
  }
}

const getCurrentYear = function() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}

module.exports = {
  getAllActivities,
  getActiveDays,
  getRecommendations,
  addActivity,
}