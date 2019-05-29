

function showDemoHelp() {
    var helpBG = document.getElementById("helpBG");
    helpBG.style.display = "block";
    var content = document.getElementById("help-content");
    content.style.display = "block";
    document.getElementById("help-icon").style.display = "none";
    document.getElementById("hide-help-icon").style.display = "block";
    document.getElementById("hide-help-icon").onclick = function() {
        content.style.display = "none";
        helpBG.style.display = "none";
        document.getElementById("help-icon").style.display = "block";
        document.getElementById("hide-help-icon").style.display = "none";
        document.getElementById("hide-help-icon").onclick = null;
    }
}


function setUpTouchHander(element, touchStartFunc, touchMoveFunc, touchEndFunc, touchCancelFunc) {
       /*
           element -- either the element itself or a string with the id of the element
           touchStartFunc(x,y,evt) -- should return a boolean to indicate whether to start a drag operation
           touchMoveFunc(x,y,evt,prevX,prevY,startX,startY)
           touchEndFunc(evt,prevX,prevY,startX,startY)
           touchCancelFunc()   // no parameters
       */
    if (!element || ! touchStartFunc || !(typeof touchStartFunc == "function")) {
        throw "Illegal arguments in setUpTouchHander";
    }
    if (typeof element == "string") {
        element = document.getElementById(element);
    }
    if (!element || !element.addEventListener) {
        throw "first argument in setUpTouchHander is not a valid element";
    }
    var dragging = false;
    var startX, startY;
    var prevX, prevY;
    function doTouchStart(evt) {
        if (evt.touches.length != 1) {
           doTouchEnd(evt);
           return;
        }
        evt.preventDefault();
        if (dragging) {
            doTouchEnd();
        }
        var r = element.getBoundingClientRect();
        var x = evt.touches[0].clientX - r.left;
        var y = evt.touches[0].clientY - r.top;
        prevX = startX = x;
        prevY = startY = y;
        dragging = touchStartFunc(x,y,evt);
        if (dragging) {
            element.addEventListener("touchmove",doTouchMove);
            element.addEventListener("touchend",doTouchEnd);
            element.addEventListener("touchcancel",doTouchCancel);
        }
    }
    function doTouchMove(evt) {
        if (dragging) {
            if (evt.touches.length != 1) {
               doTouchEnd(evt);
               return;
            }
            evt.preventDefault();
            if (touchMoveFunc) {
                var r = element.getBoundingClientRect();
                var x = evt.touches[0].clientX - r.left;
                var y = evt.touches[0].clientY - r.top;
                touchMoveFunc(x,y,evt,prevX,prevY,startX,startY);
            }
            prevX = x;
            prevY = y;
        }
    }
 