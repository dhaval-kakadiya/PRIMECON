import AOS from 'aos';
let $;

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#nav'
//   });


// navbar script 
var header = document.querySelector(".navbar");
var navbarHeight = header.offsetHeight;
var lastScrollTop = 0;

window.onscroll = function () { scrollHide() };

function scrollHide() {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  console.log(st);
  if (st > lastScrollTop) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScrollTop = st <= 0 ? 0 : st;
}
// navbar script 


// scroll button 
var btn = $('#buttonnn');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
// scroll button 

// navbar toggle script 
$(function () {
  var navMain = $(".navbar-collapse");

  navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
  });
});
// navbar toggle script 

// aos animation script 
AOS.init();
// aos animation script 




//register the scroll event
window.addEventListener('scroll', onScroll, false);

//Get all the section reference
var sectionOne = document.querySelector('.item-1');
var sectionTwo = document.querySelector('.item-2');
var sectionThree = document.querySelector('.item-3');
var sectionForth = document.querySelector('.item-4');
var sectionFivth = document.querySelector('.item-5');

//Calculate their individual height
var SectionOneHeight = getComputedStyle(sectionOne).height.split('px')[0];
var SectionTwoHeight = getComputedStyle(sectionTwo).height.split('px')[0];
var SectionThreeHeight = getComputedStyle(sectionThree).height.split('px')[0];
var SectionForthHeight = getComputedStyle(sectionForth).height.split('px')[0];
var SectionFivthHeight = getComputedStyle(sectionFivth).height.split('px')[0];

//calculate the checkpoint where item need to be modified
var checkPointOne = parseFloat(SectionOneHeight);
var checkPointTwo = checkPointOne + parseFloat(SectionTwoHeight);
var checkPointThree = checkPointTwo + parseFloat(SectionThreeHeight);
var checkPointForth = checkPointThree + parseFloat(SectionForthHeight);

//Scroll logic
function onScroll() {
  //get the current scrollbar position
  var scrollBarPosition = window.pageYOffset | document.body.scrollTop
  console.log(scrollBarPosition + ' : ' + checkPointOne)
  //First section is already fixed
  if (scrollBarPosition >= 0 && scrollBarPosition < checkPointOne) {
    removeClass(sectionTwo, sectionThree)
  } else if (scrollBarPosition > checkPointOne && scrollBarPosition <= checkPointTwo) {
    addClass(sectionTwo, sectionThree, checkPointTwo)
    removeClass(sectionThree, sectionForth)
  } else if (scrollBarPosition > checkPointTwo && scrollBarPosition <= checkPointThree) {
    addClass(sectionThree, sectionForth, checkPointThree)
    removeClass(sectionForth, sectionFivth)
  } else if (scrollBarPosition > checkPointThree && scrollBarPosition <= checkPointForth) {
    addClass(sectionForth, sectionFivth, checkPointForth)
  }

}

function addClass(elemOne, elemTwo, margin) {
  elemOne.classList.add('fixed');
  elemTwo.style.marginTop = (margin) + 'px';
}

function removeClass(elemOne, elemTwo) {
  elemOne.classList.remove('fixed');
  elemTwo.style.marginTop = '0px';
}