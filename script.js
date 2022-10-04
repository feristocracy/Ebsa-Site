const barras = document.getElementById("barras");
const backMenu = document.getElementById("back_menu");
const nav = document.querySelector('#nav');
let navTop = nav.offsetTop;
const menu = document.getElementById("menu");
const logo = document.getElementById("logo_small");
let barrasClick = 1;


const showMenu = e => {
  nav.style.right = "0px";
  logo.style.display = "block";
  backMenu.style.display = "block";
  e.stopPropagation();
}

const hideMenu = e => {
  nav.style.right = "-250px";
  backMenu.style.display = "none";
  e.stopPropagation();
}

barras.addEventListener("click", e => {
  if (barrasClick == 1) {
    showMenu(e);
    barrasClick = 0;
    return;
  }
  if (barrasClick == 0) {
    hideMenu(e);
    barrasClick = 1;
    return;
  }
})

backMenu.addEventListener("click", e => {
  hideMenu(e);
  barrasClick = 1;
  return;
})

var responsiveSlider = function () {

  var slider = document.getElementById("carrusel");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("carrusel_lista");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");




  window.addEventListener('resize', function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if (count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if (count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };


  setInterval(function () {
    nextSlide()
  }, 3000);

};

window.onload = function () {
  responsiveSlider();
}

/*--------------- STICKY NAV BAR ------------------*/



function fixedNav() {
  if (window.scrollY >= 100 && window.innerWidth >= 1050) {
    nav.classList.add('sticky_navbar');
    logo.style.display = "block";
    menu.style.marginTop = "0";
  }

  if (window.scrollY < 100 && window.innerWidth >= 1050) {
    nav.classList.remove('sticky_navbar');
    logo.style.display = "none";
    menu.style.marginTop = "25px";
  }
}

function fixedSize() {
  if (window.innerWidth < 1050) {
    nav.classList.remove("sticky_navbar");
  }

  if (window.innerWidth >= 1050) {
    //nav.style.right = "0px";
    //hideMenu();
    logo.style.display = "none";
    backMenu.style.display = "none";
  }
}

window.addEventListener('scroll', fixedNav);
window.addEventListener("resize", fixedSize);