//rectvariety
let xRect = 5
let yRect = 150
let baseRect = 10
let alturaRect = 90 

//Ballvariety
let xBall = 300
let yBall = 200
let diameter = 20

//Ballvelocity
let speedxBall = 5
let speedyBall = 5


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  showBall()
  movimentBall ()
  colisionVerificationEdge()
  showRect()
  
}
function showRect(){
    rect(xRect, yRect, base)
  
  
  function showBall (){
  circle(xBall,yBall,diameter)
    xBall += speedxBall
    yBall += speedyBall
  if(xBall +15 > width || xBall < 0 )
    speedxBall *= -1
  if(yBall +15 > height || yBall < 0)
    speedyBall *= -1
}

