class Unit{
  constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.destX;
    this.destY;
    this.moveSpeed = 5;
    this.color = "orange";
    this.selected = false;
    allUnits.push(this);
  }

  draw(){
    if(this.selected == true){
      this.color = "lightblue";
    } else {
      this.color = "orange";
    }
    ctx.beginPath();
    ctx.rect(this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
    ctx.fillStyle = this.color;
  	ctx.fill();
  }

  setMoveDest(x,y){
    this.destX = x;
    this.destY = y;
  }

  move(){
    var hypotenuse = Math.sqrt(Math.pow((this.x - this.destX),2) + Math.pow((this.y - this.destY),2));
    var xSide = Math.abs(this.destX - this.x);
    var angle = Math.acos(xSide/hypotenuse);

    var moveX = this.moveSpeed * Math.cos(angle);
    var moveY = this.moveSpeed * Math.sin(angle);

    if (this.x > this.destX){
      if((this.x - this.destX) > this.moveSpeed){
        this.x = this.x - moveX;
      } else {
        this.x = this.destX;
      }
    } else if(this.x < this.destX){
      if((this.x + this.destX) > this.moveSpeed){
        this.x = this.x + moveX;
      } else {
        this.x = this.destX;
      }
    }

    if (this.y > this.destY){
      if((this.y - this.destY) > this.moveSpeed){
        this.y = this.y - moveY;
      } else {
        this.y = this.destY;
      }
    } else if(this.y < this.destY){
      if((this.y + this.destY) > this.moveSpeed){
        this.y = this.y + moveY;
      } else {
        this.y = this.destY;
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