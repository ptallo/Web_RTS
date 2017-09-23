class Unit{
  constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rect = {x: this.x, y: this.y, width: this.width, height: this.height};
    this.destX;
    this.destY;
    this.moveSpeed = 5;
    this.color = "orange";
    this.selected = false;
    allUnits.push(this);
  }

  draw(){
    ctx.beginPath();
    ctx.rect(this.x,this.y,this.width,this.height);
    ctx.fillStyle = this.color;
  	ctx.fill();
  }

  setMoveDest(x,y){
    this.destX = x - (this.width/2);
    this.destY = y - (this.height/2);
  }

  testMove(){
    var hypotenuse = Math.sqrt(Math.pow((this.x - this.destX),2) + Math.pow((this.y - this.destY),2));
    var xSide = Math.abs(this.destX - this.x);
    var angle = Math.acos(xSide/hypotenuse);

    var moveX = this.moveSpeed * Math.cos(angle);
    var moveY = this.moveSpeed * Math.sin(angle);

    var tempX = (this.x > this.destX) ? (this.x - moveX) : (this.x + moveX);
    var tempY = (this.y > this.destY) ? (this.y - moveY) : (this.y + moveY);
    var rect = {width: this.width, height: this.height};

    if(Math.abs(this.destX - tempX) > moveX){
      rect['x'] = tempX;
    } else {
      rect['x'] = this.x;
    }

    if(Math.abs(this.destY - tempY) > moveY){
      rect['y'] = tempY;
    } else {
      rect['y'] = this.y;
    }
    return rect;
  }

  setRect(rect){
    this.rect = rect;
    this.x = rect['x'];
    this.y = rect['y'];
    this.width = rect['width'];
    this.height = rect['height'];
  }

  checkSelection(rect){
    if( rect.x < allUnits[i].x + allUnits[i].width &&
        rect.x + rect.width > allUnits[i].x &&
        rect.y < allUnits[i].y + allUnits[i].height &&
        rect.y + rect.height > allUnits[i].y){
            selectedUnits.push(this);
            this.selected = true;
    }
  }

  testCollision(rect){
    if( rect.x < this.x + this.width &&
        rect.x + rect.width > this.x &&
        rect.y < this.y + this.height &&
        rect.y + rect.height > this.y){
            return true;
    }
    return false;
  }
}
