var robot = require("robotjs");

//Config
var SCREEN = { height : 1280, width : 800};
robot.setMouseDelay(1);



module.exports = {
    moveMouse : function(x,y){
        robot.moveMouse(x, y);
    },
    click : function(x,y){
        robot.mouseToggle("down");
        setTimeout(function(){
            robot.mouseToggle("up");
        }, 1000);
        robot.moveMouse(x, y);
    },
    moveClick : function(x,y){
        this.moveMouse(x,y);
        this.click(x,y);
    }
};