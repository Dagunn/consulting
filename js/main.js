$(document).ready(function () {
  $('.slider').slick({
    nextArrow: '<button class="slick-arrow slick-next"><img src="img/right-arrow.svg" alt="next"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="img/left-arrow.svg" alt="prev"></button>',
    responsive: [
      {
        breakpoint: 486,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]

  })

});