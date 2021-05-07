$(document).ready(function () {
  // wow.js
  new WOW().init()

  // relax.js
  var rellax = new Rellax('.rellax', {
    center: true,
  })

  // popup
  $('.popup-call-btn').on('click', (event) => {
    event.preventDefault()
    $('.popup').fadeIn()
  })
  $('.popup-close-btn').on('click', (event) => {
    event.preventDefault()
    $('.popup').fadeOut()
  })

  // slick-slider 2-d page
  $('.features-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  // slick-slider 4-th page
  $('.feedback-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="img/feedback/feedback-prev.svg" /></button>',
    nextArrow:
      '<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="img/feedback/feedback-next.svg" /></button>',
  })

  // slick-slider 8-th page
  $('.materials-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  // maskedinput.js
  $('#phone1, #phone2, #phone3, #phone4, #phone5').mask('+9 (999) 999-99-99')
})
