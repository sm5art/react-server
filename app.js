//dependencies
var express = require('express');
path = require('path'),
app = express(),
port = 8888,
bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('node-jsx').install();

//db connection
mongoose.connect('mongodb://localhost/norum');

//configs

//middleware
app.use(express.static(path.join(__dirname, 'app/public')));
app.use(bodyParser());

//set views and engines and routing
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('./routes/router')(app);
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});
app.listen(port);
console.log("server running on port " + port)
