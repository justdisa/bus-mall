'usestrict';

//declaring some variables//
var products = [];
var displayedProducts = [];
var shown = 0;
var clicked = 0;

//building constructor function//
function Product (name) {
  this.name = name;
  this.imagePath = 'img/' + name;
  this.shown = shown;
  this.clicked = clicked;
  products.push(this);
};
//for loop to choose products//
for (var i = 0; i < products.length; i++) {
  var newProduct = products[i];
  newProduct = new Product(newProduct);
}

//random number creator//
function random () {
  return Math.floor(Math.random() * products.length);
}

//items to evaluate//
var bag = new Product ('bag.jpg');
var banana = new Product ('banana.jpg');
var bathroom = new Product ('bathroom.jpg');
var boots = new Product ('boots.jpg');
var breakfast = new Product ('breakfast.jpg');
var bubblegum = new Product ('bubblegum.jpg');
var chair = new Product ('chair.jpg');
var cthulhu = new Product ('cthulhu.jpg');
var dogduck = new Product ('dog-duck.jpg');
var dragon = new Product ('dragon.jpg');
var pen = new Product ('pen.jpg');
var petsweep = new Product ('pet-sweep.jpg');
var scissors = new Product ('scissors.jpg');
var shark = new Product ('shark.jpg');
var sweep = new Product ('sweep.png');
var tauntaun = new Product ('tauntaun.jpg');
var unicorn = new Product ('unicorn.jpg');
var usb = new Product ('usb.gif');
var watercan = new Product ('water-can.jpg');
var wineglass = new Product ('wine-glass.jpg');

//random number generator//
//need to limit it with min and max numbers//
//accessing path name with doc path//
//pushing it to array//
