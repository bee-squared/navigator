const db = require('../../index.js');

const getAllActivities = function() {
  try {
    return db.activityModel.find({});
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

module.exports = {
  getAllActivities,
  addActivity
}