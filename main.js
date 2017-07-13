
function goFullScreen(){
    var canvas = document.getElementById("myCanvas");

    if(canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if(canvas.webkitRequestFullScreen)
        canvas.webkitRequestFullScreen();
    else if(canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();
}

$(document).ready(onLoad);
