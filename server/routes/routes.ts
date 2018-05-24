module.exports = function(app) {

    const express = require('express');
    const path = require('path');

    // ---------------------------------------------------------
    // get an instance of the router for api routes
    // ---------------------------------------------------------

    app.get('/hoteles', function(req, res) {
        res.type('json');
        res.sendFile(path.normalize(__dirname + '/data.json'));
    });


   // ---------------------------------------------------------
    // authenticated routes
    // ---------------------------------------------------------
    app.get('/test', function(req, res) {

      res.type('json');

      res.json(200, { message: 'Welcome to the coolest API on earth!' });

  });



};
