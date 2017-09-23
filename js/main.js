var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var allUnits = [];
var selectedUnits = [];
var mouseSelX, mouseSelY;
var mouseX, mouseY;

$('#myCanvas').mousedown(function(e){
  var rect = canvas.getBoundingClientRect();
  mouseSelX = e.clientX - rect.left;
  mouseSelY = e.clientY - rect.top;
  mouseSelX = (mouseSelX / rect.width) * canvas.width;
  mouseSelY = (mouseSelY / rect.height) * canvas.height;
  if(e.buttons == 1){
    $('.test1').text("left mouse button down");
    for(i=0;i<selectedUnits.length;i++){
      selectedUnits[i].selected = false;
    }
    selectedUnits = [];
    SelectionCursor.setCoord(mouseSelX,mouseSelY);
    SelectionCursor.setClickedStatus(true);
  } else if (e.buttons == 2) {
    $('.test1').text("right mouse button down");
    for(i=0;i<selectedUnits.length;i++){
      selectedUnits[i].setMoveDest(mouseSelX,mouseSelY);
    }
  }
});

$('#myCanvas').mouseup(function(e){
  var rect = canvas.getBoundingClientRect();
  handleUnitSelection();
  SelectionCursor.setClickedStatus(false);
  $('.test1').text('mouse button up');
});

$('#myCanvas').on('mousemove',function(e){
  var rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
  mouseX = (mouseX / rect.width) * canvas.width;
  mouseY = (mouseY / rect.height) * canvas.height;
});

$('#myCanvas').bind("contextmenu",function(e){
  e.preventDefault();
});

function handleUnitSelection(){
  var mouseRect = { x: ((mouseX < mouseSelX) ? mouseX : mouseSelX),
                    y: ((mouseY < mouseSelY) ? mouseY : mouseSelY),
                    width: Math.abs(mouseX - mouseSelX),
                    height: Math.abs(mouseY - mouseSelY)};

  for(i=0; i<allUnits.length;i++){
    allUnits[i].checkSelectionCollision(mouseRect);
  }
}

function handleUnitUpdate(){
  for (i=0;i<allUnits.length;i++){
    var rect = allUnits[i].testMove();
    var collided = false;
    for (j=0;j<allUnits.length;j++){
      if(i!=j){
        collided = allUnits[j].testCollision(rect);
      }
    }
    if(!collided){
      allUnits[i].setRect(rect);
    }
    allUnits[i].draw();
  }
}

function init(){
  var u1 = new Unit(200,200,100,100);
  var u2 = new Unit(400,400,20,200);
}

function main(){
  $('.test').text('main active');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  handleUnitUpdate()
  SelectionCursor.draw(mouseX,mouseY);
  requestAnimationFrame(main);
}

init();
main();
