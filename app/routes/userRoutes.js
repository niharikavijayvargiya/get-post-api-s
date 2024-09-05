const express = require('express');
const { getUser } = require('../controllers/userController');

const router = express.Router();

router.get('/user/info', getUser);

module.exports = router;
