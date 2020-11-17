//Create variables here
var dog,happydog;
var food,foodStock;
var database;

function preload()
{
  //load images here
  dogIMG = loadImage("dogImg.png");
  happydog = loadImage("dogImg1.png");
}

function setup() {
canvas =createCanvas(500,500);

dog = createSprite(250,250,10,10);
dog.addImage(dogIMG);
dog.scale = 0.08;

database = firebase.database();

foodStock = database.ref('food');
foodStock.on("value",readStock);

}


function draw() { 
  background(46,139,87);
  
  if (keyWentDown(UP_ARROW)) {
    writeStock(food);
    dog.addImage(happydog);
  }

  //add styles here
  textSize(10);
  fill("red");
  stroke("green");
  text("foodStock"+food,100,70);
  drawSprites();
}  
  //Function to read values from DB
  function readStock(data){
    food=data.val();
  }

  //Function to write values from DB
  function writeStock(x){
   if (x <= 0) {
     x = 0;
   }
   else{
     x = x-1;
   }
    database.ref('/').update({
      food:x
    })
  }





