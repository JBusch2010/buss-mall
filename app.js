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
var totalClicks = 0;
var leftProductOnThePage = null;
var middleProductOnThePage = null;
var rightProductOnThePage = null;

var ProductPicture = function (name, imageSrc){
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
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
  var leftIndex = Math.round(Math.random() * ProductPicture.allImages.length);

  do {
    var rightIndex = Math.round(Math.random() * ProductPicture.allImages.length);
  } while (rightIndex === leftIndex === middleIndex);
  do {
    var middleIndex = Math.round(Math.random() * ProductPicture.allImages.length);
  } while (middleIndex === leftIndex === rightIndex);


  leftProductOnThePage = ProductPicture.allImages[leftIndex];
  middleProductOnThePage = ProductPicture.allImages[middleIndex];
  rightProductOnThePage = ProductPicture.allImages[rightIndex];

  renderNewProducts(leftIndex, middleIndex, rightIndex);
};



var handleClickOnProduct = function(event){
  console.log('im workin playa');
  // if not 25 clicks then keep clicking
  if(totalClicks < 25){

    var productsClickedOn = event.target;
    var id = productsClickedOn.id;

    if(id === 'left_product_img' || id === 'middle_product_img' || id === 'right_product_img'){
      //need to increment clicks for left, middle, and right products
      if(id === 'left_product_img'){
        leftProductOnThePage.clicks++;
      }

      if(id === 'right_product_img'){
        rightProductOnThePage.click++;
      }

      if(id === 'middle_product_img'){
        middleProductOnThePage.click++;
      }

      leftProductOnThePage.timesShown++;
      middleProductOnThePage.timesShown++;
      rightProductOnThePage.timesShown++;

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
  }
};


productImageSectionTag.addEventListener('click', handleClickOnProduct);

new ProductPicture('Wine Glass', './img/wine-glass.jpg');
new ProductPicture('Banana', './img/banana.jpg');
new ProductPicture('Bathroom','./img/bathroom.jpg');
new ProductPicture('Boots','./img/boots.jpg');
new ProductPicture('Breakfast','./img/breakfast.jpg');
new ProductPicture('Bubblegum','./img/bubblegum.jpg');
new ProductPicture('Cthulu','./img/cthulhu.jpg');
new ProductPicture('Dog-Duck','./img/dog-duck.jpg');
new ProductPicture('Pen','./img/pen.jpg');
new ProductPicture('Pet-Sweep','./img/pet-sweep.jpg');
new ProductPicture('Scissors','./img/scissors.jpg');
new ProductPicture('Shark','./img/shark.jpg');
new ProductPicture('Sweep','./img/sweep.png');
new ProductPicture('TaunTaun','./img/tauntaun.jpg');
new ProductPicture('Unicorn','./img/unicorn.jpg');
new ProductPicture('USB','./img/usb.gif');
new ProductPicture('Water-Can','./img/water-can.jpg');

// leftProductOnThePage = ProductPicture.allImages [0];
// middleProductOnThePage = ProductPicture.allImages [1];
// rightProductOnThePage = ProductPicture.allImages [2];

pickNewProducts();
