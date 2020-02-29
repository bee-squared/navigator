const express = require('express');
const router = express.Router();
const activity = require('../database/queries/activity/activities.js');

/* --------------------- Get --------------------- */
// activities
router.get('/getAllActivities', function (req, res) {
  activity.getAllActivities()
    .then((results) => res.status(200).send(results));
})

router.get('/getActivity', function (req, res) {
  res.send("route is working");
    // .then((results) => res.status(200).send(results))
})

/* --------------------- Add --------------------- */
router.post('/addActivity', (req, res) => {
  activity.addActivity(req.body)
    .then((results) => res.sendStatus(results));
})

/* --------------------- Delete --------------------- */
// router.getActivity('/deleteActivity', function (req, res) {
//   res.send("route is working");
//     // .then((results) => res.status(200).send(results))
// })

module.exports = router;