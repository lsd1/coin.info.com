var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path'),
    history = require('connect-history-api-fallback');
    app.use(history()).use(express.static(path.join(__dirname)));
    server.listen(process.env.PORT || 80);