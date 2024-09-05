const express = require('express');
const { getRandomImage } = require('../controllers/imageController');

const router = express.Router();

router.get('/random-image', getRandomImage);

module.exports = router;
