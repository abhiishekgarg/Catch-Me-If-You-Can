var box = document.getElementById("box");

var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;

// Updates the viewport height and width dynamically
window.addEventListener("resize", function() {
    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;
});

box.addEventListener("mouseover", function() 
{    
    var pos = getNewPosition();   
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});

box.addEventListener("click", function() 
{    
    var pos = getNewPosition();   
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});

function getNewPosition() {
    
    var boxAttr = box.getBoundingClientRect();
    // The boxWidth and boxHeight are subtracted so that they would not move out from the right and bottom direction
    var newX = Math.floor((Math.random() * viewWidth) + 1 - boxAttr.width);
    var newY = Math.floor((Math.random() * viewHeight) + 1 - boxAttr.height);

    // These will satisfy that box does not move go out in the top and left direction
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    return {x: newX, y: newY};
}