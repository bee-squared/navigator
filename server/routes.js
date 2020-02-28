const express = require('express');
const router = express.Router();

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
router.post('/addActivity', function (req, res) {
  res.send("route is working");
    // .then((results) => res.status(200).send(results))
})

/* --------------------- Delete --------------------- */
// router.getActivity('/deleteActivity', function (req, res) {
//   res.send("route is working");
//     // .then((results) => res.status(200).send(results))
// })

module.exports = router;