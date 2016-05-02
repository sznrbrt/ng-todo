'use strict';

var express = require('express');
var router = express.Router();


// Route: /api

router.use('/items', require('./items'));

module.exports = router;
