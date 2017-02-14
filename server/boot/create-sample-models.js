'use strict';

module.exports = function(app) {
  app.dataSources.accountDS.automigrate('prueba', function(err) {
    if (err) throw err;

    console.log('Models created: prueba');
  });
  app.dataSources.accountDS.automigrate('Account', function(err) {
    if (err) throw err;

    console.log('Models created Account:');
  });
};