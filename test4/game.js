class Game{

    constructor(x,y,width,height){
var options={
    'isStatic': true
}

this.body= Bodies.rectangle(x,y,width,height,options)
this.width= width   
this.height=height   

World . add(world,this.body)

    }
   
display(){
  
    background ('white')
var pos= this.body.position

rectMode(CENTER)
fill ('brown')
stroke ('brown')
rect(pos.x,pos.y,this.width,this.height)

}


}

