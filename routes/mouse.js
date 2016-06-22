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
    var x = query.x || 150;
    var y = query.y || 150;
    var action = query.action || 'left';
    console.log("move-click mouse : ",query);
    mouseHandler.moveClick(x,y,action);
    res.send({moved : true});
});

module.exports = router;
