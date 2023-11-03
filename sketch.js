var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload(){
  // Carga la imagen del path (camino) y la animación del boy (niño)
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("jake1.png", "jake2.png", "jake3.png","jake4.png","jake5.png");
}

function setup(){
  createCanvas(400,400);

  // Crea un sprite para el path (camino)
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  // Crea un sprite para el boy (niño)
  boy = createSprite(200, 300);
  boy.addAnimation("running", boyImg);
  boy.scale = 1;

  // Crea los límites izquierdo y derecho
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;
  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);

  // Hacer que el boy se mueva en el eje X con el mouse
  boy.x = mouseX;

  // Colisión de boy con los límites derecho e izquierdo invisibles
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  // Código para reiniciar el fondo
  if (path.y > 400){
    path.y = height/2;
  }

  drawSprites();
}
