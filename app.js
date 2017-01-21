'use strict';

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
}
function storeLocal(){
  for (var i = 0; i < products.length; i++){
    new Product(products[i], 'img/' + products[i]);
  }
  localStorage.setItem('products',JSON.stringify(products));
};

//random number creator//
function randNum () {
  return Math.floor(Math.random() * products.length);
}
//function to choose products//
function displayProduct () {
  function displayLeft () {//start of displayLeft//
    var leftIndex = randNum();
    if (leftIndex === displayedProducts[0] || leftIndex === displayedProducts[1] || leftIndex === displayedProducts[2]) {
      displayLeft();
    }
    else {
      var leftProduct = products[leftIndex];
      left.src = leftProduct.imagePath;
      left.alt = leftProduct.name;
      leftProduct.views += 1;
      displayedProducts[0] = leftIndex;
    }
  }//end of displayLeft//
  displayLeft(); //call displayLeft//
  function displayCenter () {//start of displayCenter//
    var centerIndex = randNum();
    if (centerIndex === displayedProducts[0] || centerIndex === displayedProducts[1] || centerIndex === displayedProducts [2]) {
      displayCenter();
    }
    else {var centerProduct = products[centerIndex];
      center.src = centerProduct.imagePath;
      center.alt = centerProduct.name;
      centerProduct.views += 1;
      displayedProducts[1] = centerIndex;
    }
  }//end of displayCenter//
  displayCenter();//call displayCenter//
  function displayRight() {//start of displayRight//
    var rightIndex = randNum();
    if (rightIndex === displayedProducts[0] || rightIndex === displayedProducts[1] || rightIndex === displayedProducts[2]) {
      displayRight();
    }
    else {
      var rightProduct = products[rightIndex];
      right.src = rightProduct.imagePath;
      right.alt = rightProduct.name;
      rightProduct.views += 1;
      displayedProducts[2] = rightIndex;
    }
  }//end of displayRight//
  displayRight();//call displayRight//
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
//////////////////////////////////////////////////////////////////////
// if (localStorage.clicks && localStorage.products){
//   allProducts = JSON.parse(localStorage.getItem('products'));
//   data = JSON.parse(localStorage.getItem('data'));
// } else {
//   data = {
//     labels: [],
//     datasets: [     //this code does not work, but it's in here//
//       {
//         label: '',
//         fillColor: '',
//         strokeColor: '',
//         highlightFill: '',
//         highlightStroke: '',
//         data: []
//       }
//     ]
//   };
//   storeLocal();
// };
/////////////////////////////////////////////////////////////////////

//here is my listener//
var startButton = document.getElementById('startButton');
startButton.addEventListener('click', playGame);

function clickyClick(event) {
  if(totalClicks < 25) {
    totalClicks += 1;
    if(event.target.id == 'left') {
      (products[displayedProducts[0]]).clicks++;
    }
    else if (event.target.id == 'center') {
      (products[displayedProducts[1]]).clicks++;
    }
    else{
      (products[displayedProducts[2]]).clicks++;
    }
    displayProduct();
    localStorage.setItem('products',JSON.stringify(products));
    localStorage.setItem('clicks',JSON.stringify(clicks));
  }
  else{
    startButton.removeEventListener('click', playGame);
    left.removeEventListener('click', clickyClick);
    center.removeEventListener('click', clickyClick);
    right.removeEventListener('click', clickyClick);
    function makeList(){
      var list = document.getElementById('product-clicks');
      for(var i = 0; i < products.length; i++) {
        var item = document.createElement('li');
        item.textContent = 'The image ' + products[i].name + ' was selected ' + products[i].clicks + ' times.';
        list.appendChild(item);
      }
    }
    makeList();
  }
}
function playGame(){
  displayProduct();
  left.addEventListener('click', clickyClick);
  center.addEventListener('click', clickyClick);
  right.addEventListener('click', clickyClick);
}

var context = document.getElementById('canvas1').getContext('2d');

var chartData = [100, 200, 300, 50, 10];
var chartColors = ['blue', 'red', 'yellow', 'orange', 'green'];
var chartLabels = ['Build', 'yourself', 'a', ''];
var chartOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

var myFirstChart = new Chart(context, {//this is where we'll build out the chart
  type: 'bar',
  data: {
    labels: chartColors,
    datasets: [{
      label: '# of votes for each color',
      data: chartData,
      backgroundColor: chartColors
    }]
  },
  options: chartOptions
});
