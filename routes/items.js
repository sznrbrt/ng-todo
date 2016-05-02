'use strict';

var express = require('express');
var router = express.Router();
var Item = require('../models/item');

// Route: /api/

router.route('/')
  .get((req, res) => {
      Item.getAll((err, items) => {
      if(err) return res.status(400).send(err);
      res.send(items);
    })
  })
  .post((req, res) => {
    var item = req.body;
    Item.create(item, (err, item) => {
      if(err) return res.status(400).send(err);
      res.send('You have create a new item!');
    })
  });

module.exports = router;
