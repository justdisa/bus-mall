'usestrict';

//declaring some variables//
var products = [];
var displayedProducts = [];
var clicks = 0;
var views = 0;
var totalClicks = 0;
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

//building constructor function//
function Product (name) {
  this.name = name;
  this.imagePath = './img/' + name;
  this.views = views;
  this.clicks = clicks;
  products.push(this); //pushing into products array//
};

//random number creator//
function randNum () {
  return Math.floor(Math.random() * products.length);
}
//function to choose products//
function displayProduct () {
  function displayLeft () {
    var leftIndex = randNum();
    console.log(leftIndex);
    if (leftIndex === displayedProducts[0] || leftIndex === displayedProducts[1] || leftIndex === displayedProducts[2]) {
      console.log(displayedProducts);
      displayLeft();
    }//for left image//
    else {
      var leftProduct = products[leftIndex];
      console.log(leftProduct);
      left.src = leftProduct.imagePath;
      left.alt = leftProduct.name;
      leftProduct.views += 1;
      displayedProducts[0] = leftIndex;
    }
  }
  displayLeft();
  function displayCenter () {
    var centerIndex = randNum(); //for center image//
    if (centerIndex === displayedProducts[0] || centerIndex === displayedProducts[1] || centerIndex === displayedProducts [2]) {
      displayCenter();
    }
    else {var centerProduct = products[centerIndex];
      center.src = centerProduct.imagePath;
      center.alt = centerProduct.name;
      centerProduct.views += 1;
      displayedProducts[1] = centerIndex;
    }
  }
  displayCenter();
  function displayRight() {
    var rightIndex = randNum();
    if (rightIndex === displayedProducts[0] || rightIndex === displayedProducts[1] || rightIndex === displayedProducts[2]) {
      displayRight();
    }
    else { //for right image//
      var rightProduct = products[rightIndex];
      right.src = rightProduct.imagePath;
      right.alt = rightProduct.name;
      rightProduct.views += 1;
      displayedProducts[2] = rightIndex;
    }
  }
  displayRight();
};

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

//in here is where I need my listener//
var startButton = document.getElementById('startButton');
startButton.addEventListener('click', playGame);

// displayProduct();

function playGame(){
  left.addEventListener('click', function(){displayProduct(); totalClicks += 1;});
  center.addEventListener('click', function(){displayProduct(); totalClicks += 1;});
  right.addEventListener('click', function(){displayProduct(); totalClicks += 1;});
  displayProduct();
}
console.log(totalClicks);
    //it looks right. :) you might want your event listeners inside the do too, I think so
 //do I want to add the listeners again and again?

//random number generator//
//need to limit it with min and max numbers//
//accessing path name with doc path//
//pushing it to array//
