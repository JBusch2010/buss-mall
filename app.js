'use strict';

/*
Order of operations
Welcome and instructions
Randomly pick 3 products
click on a product
  event listener fires the event handler
  check if total clicks is 25
    stop letting the user click
    display clicks
  track which one was clicked on
    update the object
  update all images displayed times shown
Randomly pick 3 objects
*/

//Global Vars

var productImageSectionTag = document.getElementById('all_products');
var leftProductImageTag = document.getElementById('left_product_img');
var middleProductImageTag = document.getElementById('middle_product_img');
var rightProductImageTag = document.getElementById('right_product_img');
var resultsContainer = document.getElementById('results');
var totalClicks = 0;
var leftProductOnThePage = null;
var middleProductOnThePage = null;
var rightProductOnThePage = null;
var leftIndex = -1;
var rightIndex = -1;
var middleIndex = -1;

var ProductPicture = function (name, imageSrc, timesShown, timesClicked){
  this.name = name;
  this.timesClicked = timesClicked ? timesClicked : 0 ;
  this.timesShown = timesShown || 0;
  this.url = imageSrc;

  ProductPicture.allImages.push(this);
};

ProductPicture.allImages = [];

var renderNewProducts = function (leftIndex, middleIndex, rightIndex){
  leftProductImageTag.src = ProductPicture.allImages[leftIndex].url;
  middleProductImageTag.src = ProductPicture.allImages[middleIndex].url;
  rightProductImageTag.src = ProductPicture.allImages[rightIndex].url;
};
//new random product image picker
var pickNewProducts = function(){

  do {
    var newLeftIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
  }while (leftIndex === newLeftIndex || rightIndex === newLeftIndex || middleIndex === newLeftIndex)
  do {
    var newRightIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
  }while (newRightIndex === leftIndex || newRightIndex === middleIndex || newRightIndex === rightIndex || newRightIndex === newLeftIndex);
  do {
    var newMiddleIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
  }while (newMiddleIndex === leftIndex || newMiddleIndex === middleIndex || newMiddleIndex === rightIndex || newMiddleIndex === newLeftIndex || newMiddleIndex === newRightIndex);

  console.log(pickNewProducts);

  leftIndex = newLeftIndex;
  rightIndex = newRightIndex;
  middleIndex = newMiddleIndex;


  leftProductOnThePage = ProductPicture.allImages[newLeftIndex];
  middleProductOnThePage = ProductPicture.allImages[newMiddleIndex];
  rightProductOnThePage = ProductPicture.allImages[newRightIndex];

  renderNewProducts(leftIndex, middleIndex, rightIndex);
};



var handleClickOnProduct = function(event){
  // if not 25 clicks then keep clicking
  if(totalClicks < 25){

    var productsClickedOn = event.target;
    var id = productsClickedOn.id;

    if(id === 'left_product_img' || id === 'middle_product_img' || id === 'right_product_img'){
      //need to increment clicks for left, middle, and right products
      if(id === 'left_product_img'){
        leftProductOnThePage.timesClicked++;
      }
      
      if(id === 'right_product_img'){
        rightProductOnThePage.timesClicked++;
      }
      
      if(id === 'middle_product_img'){
        middleProductOnThePage.timesClicked++;
      }
      
      middleProductOnThePage.timesShown++;
      rightProductOnThePage.timesShown++;
      leftProductOnThePage.timesShown++;
      //for new pics
      pickNewProducts();
    }
    console.log(event.target.id);
  }
  totalClicks++;
  //once 25 clicks is reached, stop the function
  if(totalClicks === 25){
    productImageSectionTag.removeEventListener('click', handleClickOnProduct);
    alert('Thanks for your votes');
    makeBusChart();
    }
  };


productImageSectionTag.addEventListener('click', handleClickOnProduct);

new ProductPicture('Bag', './img/bag.jpg');
new ProductPicture('Banana', './img/banana.jpg');
new ProductPicture('Bathroom','./img/bathroom.jpg');
new ProductPicture('Boots','./img/boots.jpg');
new ProductPicture('Breakfast','./img/breakfast.jpg');
new ProductPicture('Bubblegum','./img/bubblegum.jpg');
new ProductPicture('Chair','./img/chair.jpg');
new ProductPicture('Cthulhu','./img/cthulhu.jpg');
new ProductPicture('Dog-Duck','./img/dog-duck.jpg');
new ProductPicture('Dragon', './img/dragon.jpg');
new ProductPicture('Pen','./img/pen.jpg');
new ProductPicture('Pet-Sweep','./img/pet-sweep.jpg');
new ProductPicture('Scissors','./img/scissors.jpg');
new ProductPicture('Shark','./img/shark.jpg');
new ProductPicture('Sweep','./img/sweep.png');
new ProductPicture('TaunTaun','./img/tauntaun.jpg');
new ProductPicture('Unicorn','./img/unicorn.jpg');
new ProductPicture('USB','./img/usb.gif');
new ProductPicture('Water-Can','./img/water-can.jpg');
new ProductPicture('Wine Glass', './img/wine-glass.jpg');

pickNewProducts();

//begin chart

function makeBusChart() {

var busChartCanvas = document.getElementById('busChart').getContext('2d');
var percents = [];
var names = [];
console.log(ProductPicture.allImages);
for (var i = 0; i < ProductPicture.allImages.length; i++) {
      var p = Math.floor((ProductPicture.allImages[i].timesClicked / ProductPicture.allImages[i].timesShown) *100);
      names.push(ProductPicture.allImages[i].name);
      percents.push(p);
    }
    console.log(percents);
    console.log(names);
var chartData = new Chart(busChartCanvas, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Votes',
            data: percents,
            backgroundColor: [
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)',
              'rgba(245, 220, 0, 1)'
            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

}

//test for local storage

var busDriver = {
  name : 'coolHandLuke',
  age : 32,
};
var busDriverStringed = JSON.stringify(busDriver);

localStorage.setItem('busdriver', busDriverStringed);

var busDriverDestringed = JSON.parse(localStorage.getItem('busDriver'));

