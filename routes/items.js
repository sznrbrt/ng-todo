'use strict';

var express = require('express');
var router = express.Router();
// var Todo = require('../models/transaction');

// Route: /api/

router.route('/')
  .get((req, res) => {
    res.send('Hello from the api endpoint!\n');
  });

module.exports = router;
