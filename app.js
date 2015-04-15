"use strict";

var express = require('express'),
    app = express();

app.get('/status', function (req, res) {
    res.send('version 0.0.1');
});

var server = app.listen(9001, function() {
    var host = server.address().host,
        port = server.address().port;

    console.log("services app listening at http://" + host + ":" + port);
});