var rodion;

function preload(){
  rodion = createImg("https://static.wikia.nocookie.net/limbuscompany/images/1/1c/Rodyafull.jpg/revision/latest?cb=20230107143805");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

image(rodion,300,300,100,100);


rodion.position(0,0);

