const navbar = document.getElementById('navbar');

// Initialize AOS
AOS.init();

// Add box shadow to navbar when user scrolls down
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('box-shadow-high');
  } else {
    navbar.classList.remove('box-shadow-high');
  }
});

// Initialize Owl Corousel
$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    center: true,
    loop:true,
    margin:30,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
  })
  $('.arrow-next').click(function() {
    owl.trigger('next.owl.carousel');
  })
  $('.arrow-prev').click(function() {
      owl.trigger('prev.owl.carousel');
  })
});
