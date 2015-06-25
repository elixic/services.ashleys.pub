'use strict';

var express = require('express'),
    response = require('./model/response/response'),
    log = require('debug')('app:main'),
    app = express(),
    content_app = express(),
    logService = require('./module/logger')(app),
    appVersion = process.env.APP_VERSION;

app.get('/status', function (req, res) {
    response.message = "OK";
    response.status = "200";
    response.version = appVersion;
    response.time = Date.now();

    log("status function called.");

    res.send(response);
});

content_app.use(express.static("app/static"));

var server = app.listen(9001, function() {
    var host = server.address().host,
        port = server.address().port;

    log("services app listening at http://" + host + ":" + port);
}),
    content_server = content_app.listen(8001, function() {
        var host = content_server.address().host,
            port = content_server.address().port;

        log("content app listening at http://" + host + ":" + port);
    });