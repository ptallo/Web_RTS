class Unit{
  constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.destX;
    this.destY;
    this.moveSpeed = 3;
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
