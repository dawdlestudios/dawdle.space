var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
$(function(){
  $('.navtitle').css('display', 'none');
  $('.logo').css('top', (($(window).innerHeight() / 1.5) - ($(window).innerHeight() / 5)) + 'px');
  $('.iframe').css({ width: $('.card-content').innerWidth() - 15 + 'px', height: $('#Beispiele').innerHeight() * 0.7 + 'px'});
  window.sr = new scrollReveal();
  setTimeout(function(){$('.preloader-wrapper').fadeOut('slow');}, 1000);
  setTimeout(function(){$('.navtitle').fadeIn('slow');}, 1700);
  setTimeout(function(){$('.loading-screen').slideUp('slow');}, 1200);
  $(window).resize(function(){
    $('.iframe').css({ width: $('.card-content').innerWidth() - 15 + 'px', height: $('#Beispiele').innerHeight() * 0.7 + 'px'});
    $('.logo').css('top', (($(window).innerHeight() / 1.5) - ($(window).innerHeight() / 5)) + 'px');
  });
  $('.parallax').parallax();
  $('.banner').unslider();
  var hashTagActive = "";
  $("a").click(function (event) {
    $(window).scrollTo(this.getAttribute('id'), 1000,{
      axis: 'y',
      offset: 0,
    });
    console.log(this.getAttribute("id"));
  });
});

//ParticlesJS
particlesJS.load('intro', 'particles/particleintro.json', function() {
  console.log('intro particles loaded');
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
function impressum() {
  alert("ToDoTM");
}
