const express = require('express');
const router = express.Router();
const path = require('path');
const activity = require('../database/queries/activity/activities.js');

/* --------------------- Get --------------------- */
// activities
router.get('/allActivities', function (req, res) {
 activity.getAllActivities()
   .then((results) => res.status(200).send(results));
})

router.get('/activity', function (req, res) {
  res.send("this route will return a single activity - check back soon");
    // .then((results) => res.status(200).send(results))
})

router.get('/activeDays', function(req, res) {
  activity.getActiveDays()
    .then((results) => res.status(200).send(`${results}`))
    .catch((error) => console.log(error));
})

router.get('/recommendations', function(req, res) {
  activity.getRecommendations(req.query)
    .then((results) => res.status(200).send(results))
    .catch((error) => console.log(error));
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

// Handles any requests that don't match the ones above
router.get('/*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/../build/index.html'));
});

module.exports = router;
