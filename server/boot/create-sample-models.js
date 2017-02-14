'use strict';
module.exports = function(app) {
  var mysql = app.dataSources.mysql;
  //create all models
  mysql.automigrate('Aptjugador', function(err) {
      if (err) return cb(err);
  });
  mysql.automigrate('Banca', function(err) {
      if (err) return cb(err);
  });
  mysql.automigrate('JugadorBanca', function(err) {
      if (err) return cb(err);
  });
};
