'use strict';

var log = require('debug')('app:log');

module.exports = function (app) {

    app.get('/log', function (req, res) {

        log(req);

        res.send('logged ok');
    });

    return app;
}
