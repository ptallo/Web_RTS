class SelectionCursor{
  constructor(){
    this.x;
    this.y;
    this.isClicked = false;
  }

  static draw(x,y){
    if(this.isClicked == true){
      ctx.strokeRect(this.x,this.y,(x - this.x),(y - this.y));
    }
  }

  static setCoord(x,y){
    this.x = x;
    this.y = y;
  }

  static setClickedStatus(state){
    this.isClicked = state;
  }

  static getClickedStatus(){
    return this.isClicked;
  }

}
