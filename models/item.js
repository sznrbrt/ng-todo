'use strict';

var db = require('../config/db');

db.query(`CREATE TABLE IF NOT EXISTS todoitems(
            duedate TEXT,
            description TEXT,
            iscomplete BOOLEAN,
            priority int,
            id int PRIMARY KEY AUTO_INCREMENT)`);

exports.getAll = function(callback) {
  db.query('SELECT * FROM todoitems', callback);
}

exports.create = function(item, callback) {
  if(!item) return callback('You must define an item!');

  var newItem = {
      duedate: item.date,
      desc: item.desc,
      isComplete: item.isComplete,
      priority: item.priority
  };
  console.log(newItem);
  db.query(`INSERT INTO todoitems (duedate, description, iscomplete, priority)
              VALUES ('${newItem.duedate}',
                      '${newItem.desc}',
                      '${newItem.isComplete}',
                      '${newItem.priority}')`, callback(null));
}
