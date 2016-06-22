var robot = require("robotjs");

//Config
var SCREEN = { height : 1280, width : 800};
robot.setMouseDelay(1);



module.exports = {
    moveMouse : function(x,y){
        robot.moveMouse(x, y);
    },
    click : function(x,y,action){
        robot.moveMouse(x, y);
        robot.mouseClick(action);
        // robot.mouseToggle("down");
        // setTimeout(function(){
        //     robot.mouseToggle("up");
        // }, 1500);
    },
    moveClick : function(x,y,action){
        var self = this;
        // setTimeout(function(){
        //     self.moveMouse(x,y);
            self.click(x,y,action);
        // }, 3000);
    }
};