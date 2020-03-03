const db = require('../../index.js');

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

const addActivity = function(activity) {
  const newActivity = new db.activityModel(activity);
  try {
    return newActivity.save()
    .then(() => 201);
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
  addActivity,
}