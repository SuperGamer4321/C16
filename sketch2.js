var box1
var box2
function setup(){
   box1 = new Box();
   box2 = new Box();
}
/*class className{
 constructor(){
    
 }

}   */ 

function draw(){
   background("pink");
   box1.display();
   box2.display();

   box1.set_speed(4);
   box2.set_speed(2);
   //trex.addAnimation();
}