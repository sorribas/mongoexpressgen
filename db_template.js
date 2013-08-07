var mongojs = require("mongojs");

var collections = COLS;

var db = GLOBAL.isTesting ? 
  mongojs("DB-test", collections): 
  mongojs("DB", collections);
module.exports = db;
