const db = require('../../index.js');

const getAllActivities = function() {
  db.find({});
}

const addActivity = function(activity) {
  console.log(db.activityModel)
  const a1 = new db.activityModel(activity);
  a1.save();
  // console.log("this should print an activity");
}

module.exports = {
  getAllActivities,
  addActivity
}