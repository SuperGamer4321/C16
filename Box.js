//template
class Box{
    /*Create the object for us 
    obj is made up of prop and methods
    */ 

    constructor(){
        //defines the properties for the object
        this.x = 200,
        this.y = 200,
        this.w = 50,
        this.h = 100
    }

    display(){
        rectMode(CENTER);
        rect(this.x,this.y,this.w,this.h)
    }

    set_speed(v){
        this.x = this.x + v;
    } 

    
}

