const express = require('express');
const router = express.Router();
const qQueries = require('../database/queries/questions/questions.js');
const aQueries = require('../database/queries/answers/answers.js');

/* --------------------- Get --------------------- */
// activities
router.getAllActivities('/activities', function (req, res) {
  qQueries.getProductQuestions()
    // .then((results) => res.status(200).send(results))
})

router.getActivity('/activity', function (req, res) {
  qQueries.getActivity()
    // .then((results) => res.status(200).send(results))
})

/* --------------------- Add --------------------- */
router.addActivity('/addActivity', function (req, res) {
  qQueries.addActivity()
    // .then((results) => res.status(200).send(results))
})

/* --------------------- Delete --------------------- */
router.getActivity('/deleteActivity', function (req, res) {
  qQueries.getActivity()
    // .then((results) => res.status(200).send(results))
})

module.exports = router;