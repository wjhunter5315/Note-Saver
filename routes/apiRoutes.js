
var dbCall = require("../db/db");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(dbCall);
  });

  app.post("/api/notes", function(req, res) {
    dbCall.push(req.body);
    res.json(dbCall);
  });

};
