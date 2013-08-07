var db = require('../db'),
    ObjectId = db.ObjectId;

exports.list = function(req, res) {
  db.PLURAL.find(function(err, PLURAL) {
    res.json(PLURAL);
  });
};

exports.create = function(req, res) {
  var SINGULAR = req.body;
  db.PLURAL.save(SINGULAR, function(err, SINGULAR) {
    res.json(SINGULAR);
  });
};

exports.update = function(req, res) {
  db.PLURAL.update({_id: ObjectId(req.params.id)}, {$set: req.body}, function(err, SINGULAR) {
    db.PLURAL.findOne({_id: ObjectId(req.params.id)}, function(err, SINGULAR) {
      res.json(SINGULAR);
    });
  });
};

exports.view = function(req, res) {
  db.PLURAL.findOne({_id: ObjectId(req.params.id)}, function(err, SINGULAR) {
    res.json(SINGULAR);
  });
};

exports.delete = function(req, res) {
  db.PLURAL.remove({_id: ObjectId(req.params.id)}, function() {
    res.send("");
  });
};
