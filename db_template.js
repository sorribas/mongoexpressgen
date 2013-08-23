var mongojs = require("mongojs");

var collections = COLS;

var db = mongojs("DB", collections);
module.exports = db;
