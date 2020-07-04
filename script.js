/*=== бургер ===*/
$(document).ready(function($) {

$('.header__burger').on('click', function(menu) {
  menu.preventDefault();
  $(this).toggleClass('header__burger__active');
});

$('.header__burger').on('click', function(menu) {
  menu.preventDefault();
  $('.menu').toggleClass('menu__active');
});

/*$('.header__burger').on('click', function() {
  $('body').toggleClass('wrapper__active');
});*/

$('.menu-btn').on('click', function() {
  $('.menu').removeClass('menu__active');
  $('.header__burger').removeClass('header__burger__active');
  $('.wrapper__active').fadeOut();
    return false;
});

$('.header__burger').click(function() {
    $('.wrapper__active').fadeIn();
    return false;
  }); 
  


/*=== modal ===*/

/*Первое модальное окно*/

  $('.popup-open').click(function() {
    $('.popup-fade').fadeIn();
    return false;
  }); 
  
  $('.popup-close').click(function() {
    $(this).parents('.popup-fade').fadeOut();
    return false;
  });   

  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade').fadeOut();
    }
  });
  
  $('.popup-fade').click(function(e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();          
    }
  }); 

/*Второе модальное окно*/

  $('.popup-open2').click(function() {
    $('.popup-fade2').fadeIn();
    return false;
  }); 
  
  $('.popup-close2').click(function() {
    $(this).parents('.popup-fade2').fadeOut();
    return false;
  });   

  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade2').fadeOut();
    }
  });
  
  $('.popup-fade2').click(function(e) {
    if ($(e.target).closest('.popup2').length == 0) {
      $(this).fadeOut();          
    }
  }); 

  /*Третье модальное окно*/

  $('.popup-open3').click(function() {
    $('.popup-fade3').fadeIn();
    return false;
  }); 
  
  $('.popup-close3').click(function() {
    $(this).parents('.popup-fade3').fadeOut();
    return false;
  });   

  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade3').fadeOut();
    }
  });
  
  $('.popup-fade3').click(function(e) {
    if ($(e.target).closest('.popup3').length == 0) {
      $(this).fadeOut();          
    }
  }); 

});

/*=== Счетчик ===*/

/*
const btns = document.querySelector('.button__add');
btns.forEach(btn=>{
  btn.addEventListener('click', 
    function () {
      const direction = this.querySelector('.button__add');
      const inp = this.parentElement.querySelector('.shoping__cart');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {

      }

      inp.value = newValue;
  })
})*/

