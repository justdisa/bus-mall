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
function Product (name, nickname) {
  this.name = name;
  this.nickname = nickname;
  this.imagePath = './img/' + name;
  this.views = views;
  this.clicks = clicks;
  products.push(this); //pushing into products array//
}

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
var bag = new Product ('bag.jpg', 'R2D2 Rolling Suitcase');
var banana = new Product ('banana.jpg', 'Banana Slicer');
var bathroom = new Product ('bathroom.jpg', 'Bathroom Reader');
var boots = new Product ('boots.jpg', 'Open Toe Galoshes');
var breakfast = new Product ('breakfast.jpg', 'One-Step Breakfast Maker');
var bubblegum = new Product ('bubblegum.jpg', 'Meatball Bubblegum');
var chair = new Product ('chair.jpg', 'Discouraging Chair');
var cthulhu = new Product ('cthulhu.jpg', 'Ia! Ia!');
var dogduck = new Product ('dog-duck.jpg', 'Doggie Duck Beak');
var dragon = new Product ('dragon.jpg', 'Dragon Meat');
var pen = new Product ('pen.jpg', 'Eating U-pen-sils');
var petsweep = new Product ('pet-sweep.jpg', 'Doggie Dust Boots');
var scissors = new Product ('scissors.jpg', 'Pizza Scissors');
var shark = new Product ('shark.jpg', 'Shark Sleeping Bag');
var sweep = new Product ('sweep.png', 'Dust Mop Baby Romper');
var tauntaun = new Product ('tauntaun.jpg', 'Tauntaun Sleeping Bag');
var unicorn = new Product ('unicorn.jpg', 'Unicorn Meat');
var usb = new Product ('usb.gif', 'Squirming USB Tentacle');
var watercan = new Product ('water-can.jpg', 'Self Watering Can');
var wineglass = new Product ('wine-glass.jpg', 'Spill-Proof Glass');

//here is my listener//
var startButton = document.getElementById('startButton');
startButton.addEventListener('click', playGame);

function clickyClick(event) {
  if(totalClicks < 24) {
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
  }
  else if (totalClicks = 24) {
    if(event.target.id == 'left') {
      (products[displayedProducts[0]]).clicks++;
    }
    else if (event.target.id == 'center') {
      (products[displayedProducts[1]]).clicks++;
    }
    else{
      (products[displayedProducts[2]]).clicks++;
    }
    startButton.removeEventListener('click', playGame);
    left.removeEventListener('click', clickyClick);
    center.removeEventListener('click', clickyClick);
    right.removeEventListener('click', clickyClick);
    // function makeList(){
    //   var list = document.getElementById('product-clicks');
    //   for(var i = 0; i < products.length; i++) {
    //     var item = document.createElement('li');
    //     item.textContent = 'The image ' + products[i].name + ' was selected ' + products[i].clicks + ' times.';
    //     list.appendChild(item);
    //   }
    // }
    var chartColors = ['violet', 'purple'];
    var chartLabels = [];
    var viewsData = [];
    var clicksData = [];

    function makeChartVars(){
      for(var i = 0; i < products.length; i++){
        viewsData.push(products[i].views);
        clicksData.push(products[i].clicks);
        chartLabels.push(products[i].nickname + ' ' + ((products[i].clicks / products[i].views) * 100).toFixed(2) + '\%');
      }
    }
    if (localStorage.viewsData) {
      var viewsDataLoc = JSON.parse(localStorage.viewsData);
      var clicksDataLoc = JSON.parse(localStorage.clicksData);
      for(var i = 0; i < products.length; i++){
        products[i].views += viewsDataLoc[i];
        products[i].clicks += clicksDataLoc[i];
      }
    }
    makeChartVars();
    console.log(chartLabels);
    console.log(viewsData);
    console.log(clicksData);

    function saveToLocal(){
      var viewsDataString = JSON.stringify(viewsData);
      localStorage.setItem('viewsData', viewsDataString);
      var clicksDataString = JSON.stringify(clicksData);
      localStorage.setItem('clicksData', clicksDataString);
    }
    saveToLocal();//remember to call this function//
    // makeList();
    // makeChart();
    //Getting the chart from HTML--I wanted to wrap this in a function, but every time I tried, I broke something.//
    var context = document.getElementById('market-chart').getContext('2d');
    //chart options--there are so many of these.
    var chartOptions = {
      legend: {labels:{fontColor: 'whitesmoke', fontSize: 14}},
      scales: {
        xAxes:[{
          ticks: {
            fontColor: 'whitesmoke',
            fontSize: 12,
            stacked: false,
            minRotation: 90,
            maxRotation: 90,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: 'whitesmoke',
            fontSize: 12,
            beginAtZero: true,
            stepSize: 5
          }
        }]
      }
    };

    var marketChart = new Chart(context, {//this is where we build out the chart//
      type: 'bar',
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: 'Views',
            data: viewsData,
            backgroundColor: chartColors[1]
          },
          {
            label: 'Clicks',
            data: clicksData,
            backgroundColor: chartColors[0]
          }]
      },
      options: chartOptions
    });
  }
}
function playGame(){
  displayProduct();
  left.addEventListener('click', clickyClick);
  center.addEventListener('click', clickyClick);
  right.addEventListener('click', clickyClick);
}
