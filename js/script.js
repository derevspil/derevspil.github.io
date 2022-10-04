$(window).on('load', function () {
  
  $('.loader').delay(2350).fadeOut('slow');
  $('.loaderArea').delay(2350).fadeOut('slow');
});

 //плавный скролл
 $('.scrollto a').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, {
      duration: 370,   // по умолчанию «400» 
      easing: "linear" // по умолчанию «swing» 
  });

  return false;
});

// window.addEventListener('DOMContentLoaded', () => {


    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    //tabs
    $(function() {
          
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
          $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
        
      });

       //slider gallery
    var swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 25,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop: true,
        //   autoHeight: true,
          breakpoints: {
            300: {
                slidesPerView: 1,
            },
            525: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            }
          }
      });

      //modal

      $('.consult').on('click', function(){
        $('.overlay, .modal').fadeIn();
      });

      $('.modal__close, .overlay').on('click', function(){
        $('.overlay, .modal').fadeOut();
      });
      $('form').trigger('reset');

     

// });