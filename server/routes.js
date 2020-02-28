const express = require('express');
const router = express.Router();

/* --------------------- Get --------------------- */
// activities
router.getAllActivities('/activities', function (req, res) {
  res.send()
    // .then((results) => res.status(200).send(results))
})

router.getActivity('/activity', function (req, res) {

    // .then((results) => res.status(200).send(results))
})

/* --------------------- Add --------------------- */
router.addActivity('/addActivity', function (req, res) {

    // .then((results) => res.status(200).send(results))
})

/* --------------------- Delete --------------------- */
router.getActivity('/deleteActivity', function (req, res) {

    // .then((results) => res.status(200).send(results))
})

module.exports = router;