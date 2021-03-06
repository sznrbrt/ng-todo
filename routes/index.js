'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', (req, res) => {
  var indexPath = path.join(__dirname, '../index.html');
  res.sendFile(indexPath);
});

router.get('/api', (req, res) => {
  var indexPath = path.join(__dirname, '../index.html');
  res.sendFile(indexPath);
});

module.exports = router;
