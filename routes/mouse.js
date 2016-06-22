var express = require('express');
var router = express.Router();
var robot = require("robotjs");

var mouseHandler = require("../handlers/mouseHandler");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/move', function(req, res, next) {
    var query = req.query;
    console.log("move mouse : ",query);
    mouseHandler.moveMouse(1280, 800);
    res.send({moved : true});
});

router.get('/move-click', function(req, res, next) {
    var query = req.query;
    console.log("move-click mouse : ",query);
    mouseHandler.moveClick(200, 200);
    res.send({moved : true});
});

module.exports = router;
