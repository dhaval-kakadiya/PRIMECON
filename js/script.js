// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#nav'
//   });


// navbar script 
var header = document.querySelector(".navbar");
var navbarHeight = header.offsetHeight;
var lastScrollTop = 0;

window.onscroll = function() {scrollHide()};

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

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// scroll button 
