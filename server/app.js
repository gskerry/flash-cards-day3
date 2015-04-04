var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var FlashCardModel = require('./models/flash-card-model');

var app = express();
module.exports = app;

var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../index.html');
/*var formHtmlPath = path.join(__dirname, '../form.html');*/

app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});

/*app.get('/newcard', function (req, res) {
    res.sendFile(formHtmlPath);
});*/

app.get('/cards', function (req, res) {

    var modelParams = req.query.category ? { category: req.query.category } : {};

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});


app.post('/cards', function (req, res, next) {

    // Reference schema for what is expected as the POST body.
    var cardData = req.body;

    FlashCardModel.create(cardData).then(function (err, card) {
        if (err) return next(err);
        // if next not passed in/defined... express has a default... 
        // send a status 500 and console the error... 
        res.json(card);
    });

});