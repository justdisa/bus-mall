'usestrict';

//declaring some variables//
var products = [];
var shown = 0;
var clicked = 0;

//building constructor function//
function CatItem (name) {
  this.name = name;
  this.imagePath = 'img/' + name + '.jpg'; //doesn't work with png or gif//
  this.shown = shown;
  this.clicked = clicked;
  products.push(this);
};
//for loop to choose products//
for (var i = 0; i < products.length; i++) {
  var newProd = products[i];
  newProd = new CatItem(newProd);
}

//random number creator//
function randNum () {
  return Math.floor(Math.random() * (max - min)) + min;
};

//items to evaluate//
var bag = new CatItem ('bag');
var banana = new CatItem ('banana');
var bathroom = new CatItem ('bathroom');
var boots = new CatItem ('boots');
var breakfast = new CatItem ('breakfast');
var bubblegum = new CatItem ('bubblegum');
var chair = new CatItem ('chair');
var cthulhu = new CatItem ('cthulhu');
var dogduck = new CatItem ('dog-duck');
var dragon = new CatItem ('dragon');
var pen = new CatItem ('pen');
var petsweep = new CatItem ('pet-sweep');
var scissors = new CatItem ('scissors');
var shark = new CatItem ('shark');
var sweep = new CatItem ('sweep');
var tauntaun = new CatItem ('tauntaun');
var unicorn = new CatItem ('unicorn');
var usb = new CatItem ('usb');
var watercan = new CatItem ('water-can');
var wineglass = new CatItem ('wine-glass');

//random number generator//
//need to limit it with min and max numbers//
//accessing path name with doc path//
//pushing it to array//
