var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
allUnits = [];


class Unit{
  constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.destX;
    this.destY;
    this.moveSpeed = 3;
    allUnits.push(this);
  }
  draw(){
    ctx.beginPath();
    ctx.rect(this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
    ctx.fillStyle="#E74C3C";
  	ctx.fill();
  }
  setMoveDest(x,y){
    this.destX = x;
    this.destY = y;
  }
  move(){
    //if the set destination is not the same as the position of the element then
    //this should move them towards it if called upon every update loop
    if (this.x > this.destX){
      if((this.x - this.destX) > this.moveSpeed){
        this.x = this.x - this.moveSpeed;
      } else {
        this.x = this.destX
      }
    } else if(this.x < this.destX){
      if((this.x + this.destX) > this.moveSpeed){
        this.x = this.x + this.moveSpeed;
      } else {
        this.x = this.destX
      }
    }

    if (this.y > this.destY){
      if((this.y - this.destY) > this.moveSpeed){
        this.y = this.y - this.moveSpeed;
      } else {
        this.y = this.destY
      }
    } else if(this.y < this.destY){
      if((this.y + this.destY) > this.moveSpeed){
        this.y = this.y + this.moveSpeed;
      } else {
        this.y = this.destY
      }
    }
  }
  getCoords(){
    var coords = [];
    coords.push(this.x);
    coords.push(this.y);
    return coords;
  }
}

$('#myCanvas').mousedown(function(e){
  var rect = canvas.getBoundingClientRect();
  if(e.buttons == 1){
    $('.test1').text("left mouse button down");
  } else if (e.buttons == 2) {
    $('.test1').text("right mouse button down");
  }
});

$('#myCanvas').mouseup(function(e){
  var rect = canvas.getBoundingClientRect();
  $('.test1').text('mouse button up');
});

$('#myCanvas').on('mousemove',function(e){
  var rect = canvas.getBoundingClientRect();
  $('.test2').text('mouse moving');
});

$('#myCanvas').bind("contextmenu",function(e){
  e.preventDefault();
});

function init(){
  var u1 = new Unit(200,200,100,100);
}

function main(){
  for (i=0;i<allUnits.length;i++){
    allUnits[i].draw();
  }
  $('.test').text('main active');
  requestAnimationFrame(main);
}

init();
main();
