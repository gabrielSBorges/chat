var express = require('express');
var load = require('express-load');

module.exports = function() {
    var app = express();

    app.use(express.static('./app/public'))

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('routes', {cwd: 'app'})
        .into(app);

    return app;
}
