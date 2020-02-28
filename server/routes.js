const express = require('express');
const router = express.Router();
const activity = require('../database/queries/activity/activities.js');

/* --------------------- Get --------------------- */
// activities
router.get('/activities', function (req, res) {
  res.send("route is working");
    // .then((results) => res.status(200).send(results))
})

router.get('/activity', function (req, res) {
  res.send("route is working");
    // .then((results) => res.status(200).send(results))
})

/* --------------------- Add --------------------- */
router.post('/addActivity', (req, res) => {
  activity.addActivity(req.body)
    // .then((results) => res.status(200).send(results))
})

/* --------------------- Delete --------------------- */
// router.getActivity('/deleteActivity', function (req, res) {
//   res.send("route is working");
//     // .then((results) => res.status(200).send(results))
// })

module.exports = router;