//----------------- index image swap ----------//

var gypsyNumber = 2;

  
function changeImage() {

  if (gypsyNumber==2){
      gypsyNumber = 1;
  }
    var image = document.getElementById('myImage');
    image.src = "img/tg2.png";
    
          
};

//----------- NAV ANIMATION ----/

$('#about').on('mouseover', function(){
    $('#about').removeClass('animated shake');
    setTimeout(function(){
        $('#about').addClass('animated shake');
    },75);
});

$('#gallery').on('mouseover', function(){
    $('#gallery').removeClass('animated shake');
    setTimeout(function(){
        $('#gallery').addClass('animated shake');
    },75);
});

$('#menu').on('mouseover', function(){
    $('#menu').removeClass('animated shake');
    setTimeout(function(){
        $('#menu').addClass('animated shake');
    },75);
});

$('#shop').on('mouseover', function(){
    $('#shop').removeClass('animated shake');
    setTimeout(function(){
        $('#shop').addClass('animated shake');
    },75);
});

//-------------------- Scrolling ------------------------------------

// page 1 scroll --- from scrollmagic.io

$(document).ready(function(){

    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    //build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#section01 div',
        triggerHook: 0.9,
        reverse: false
    })
    .setClassToggle('#section01', 'fade-in')
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: 'pink'
    })
    .addTo(controller);

    //scene 2
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#section02',
        triggerHook: 0.9,
        reverse: false
    })
    .setClassToggle('#section02', 'fade-in')
     .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: 'pink'
    })
    .addTo(controller);

    //scene 3
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#section03',
        triggerHook: 0.9,
        reverse: false
    })
    .setClassToggle('#section03', 'fade-in')
    .addTo(controller);

});

//----------about page scroll - from scroll magic

$(document).ready(function(){

    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    //build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.about1 div',
        triggerHook: 0.9,
        reverse: false
    })
    .setClassToggle('.about1', 'fade-in')
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: 'pink'
    })
    .addTo(controller);

    //scene 2
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.about2',
        triggerHook: 0.9,
        reverse: false
    })
    .setClassToggle('.about2', 'fade-in')
     .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: 'pink'
    })
    .addTo(controller);

    //scene 3
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.about3',
        triggerHook: 0.9,
        reverse: false
    })
    .setClassToggle('.about3', 'fade-in')
    .addTo(controller);

    //scene 4
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.about4',
        triggerHook: 0.9,
        reverse: false
    })
    .setClassToggle('.about4', 'fade-in')
     .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: 'pink'
    })
    .addTo(controller);

    //scene 5
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.about5',
        triggerHook: 0.9,
        reverse: false
    })
    .setClassToggle('.about5', 'fade-in')
     .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: 'pink'
    })
    .addTo(controller);

});


//-------------------- Menu pop up and blur ------------------------------------

$('#edit').on('click', function(){
    $('.menu-wrapper').css("display", "grid");
});

$('.body-modal').on('click', function(){
    $('.menu-wrapper').css("display", "none"); 
});

$('.bettyImage').on('click', function(){
    $('.menu-wrapper').css("display", "none"); // when you click on the image it closes again
});

//------------------------ carouselle ------------ //

$('.carousel').carousel();

















