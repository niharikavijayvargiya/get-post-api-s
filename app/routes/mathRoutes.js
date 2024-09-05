const express = require('express');
const { sum, multiply } = require('../controllers/mathController');

const router = express.Router();

router.post('/sum', sum);
router.post('/multiply', multiply);

module.exports = router;
