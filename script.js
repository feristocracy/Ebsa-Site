var responsiveSlider = function() {

  var slider = document.getElementById("carrusel");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("carrusel_lista");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
  
  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  
  
  setInterval(function() {
    nextSlide()
  }, 3000);
  
  };
  
  window.onload = function() {
  responsiveSlider();  
  }

  /*--------------- STICKY NAV BAR ------------------*/
  
  const nav = document.querySelector('#nav');
  let navTop = nav.offsetTop;
  const menu = document.getElementById("menu");
  const logo = document.getElementById("logo_small");
  
  function fixedNav() {
    if (window.scrollY >= 100) {    
      nav.classList.add('sticky_navbar');
      logo.style.display = "block";
      menu.style.marginTop = "0";

    } else {
      nav.classList.remove('sticky_navbar');
      logo.style.display = "none";
      menu.style.marginTop = "25px";
    }
  }
  
  window.addEventListener('scroll', fixedNav);                    