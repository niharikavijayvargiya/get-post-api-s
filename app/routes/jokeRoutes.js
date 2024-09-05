const express = require('express');
const { getRandomJokeFromApi, getRandomJokeFromArray } = require('../controllers/jokeController');

const router = express.Router();

router.get('/random-joke-from-api', getRandomJokeFromApi);
router.get('/random-joke-from-array', getRandomJokeFromArray);

module.exports = router;
