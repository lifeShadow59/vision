/*
Function List:- 
  1. Scroll Function
  2. Resize Function
  3. Load Function
  4. Ready Function

Ready Function JQuary
  1. Sidebar Menu Open Close
  2. Close Btn
  3. Open Submenu
  4. Date Picker

Function JQuary
  A. Sticky Header Js
  B. Testimonial Slider Js
  C. Our Gallery Slider Js
  D. Light Gallery Image Popup
*/

/*==================== 1. Scroll Function START ====================*/
window.onscroll = function() {
  scrollFunction();
};
/*==================== 1. Scroll Function END ====================*/

/*==================== 2. Resize Function START ====================*/
$(window).resize( function(){
  
});
/*==================== 2. Resize Function END ====================*/

/*==================== 3. Load Function START ====================*/
$(window).on('load' , function(){

});
/*==================== 3. Load Function END ====================*/

/*==================== 4. Ready Function START ====================*/
$(document).ready( function(){

  testimonialSlider();
  ourGallerySlider();
  lightGallery();

  /* ********* START 1. Sidebar Menu Open Close ********* */
  $('#SidebarBtn').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    $('.navigationPart').toggleClass('active');
    $('body').addClass('overflow-hidden');
    $('.overlay').removeClass('d-none');
    $('.mSearchBar').slideUp(500);

    $(document).one('click', function closeMenu (e){
      if($('.costom-navbar').has(e.target).length === 0){
        $('.navigationPart').removeClass('active');
        $('body').removeClass('overflow-hidden');
        $('.overlay').addClass('d-none');
      } else {
        $(document).one('click', closeMenu);
      }
    });
  });
  /* ********* END 1. Sidebar Menu Open Close ********* */

  /* ********* START 2. Close Btn ********* */
  $('.close-btn').on('click', function(e) {
    $('.navigationPart').removeClass('active');
    $('.overlay').addClass('d-none');
    $('body').removeClass('overflow-hidden');
  });
  /* ********* END 2. Close Btn ********* */

  /* ********* START 3. Open Submenu ********* */
  $(".menu-item-has-children").append("<span class='costom-dropdown-toggle-arrow'></span>");
  $('.menu-item-has-children').each(function() {
    var $dropdown = $(this);

    $(".costom-dropdown-toggle-arrow", $dropdown).click(function(e) {
      e.preventDefault();
      $div = $(".sub-menu", $dropdown);
      $div.slideToggle();
      $(".sub-menu").not($div).hide();
      return false;
    });
  });
  /* ********* END 3. Open Submenu ********* */

  /* ********* START 4. Date Picker ********* */
  $('#checkInDate').datepicker({
    uiLibrary: 'bootstrap4',
    format: 'dd-mm-yyyy'
  });
  $('#checkOutDate').datepicker({
    uiLibrary: 'bootstrap4',
    format: 'dd-mm-yyyy'
  });
  /* ********* END 4. Date Picker ********* */

});
/*==================== 4. Ready Function END ====================*/

/*==================== 5. Mouseup Function START ====================*/
$(document).mouseup(function (e){
  if ($(window).width() > 991) {
    var subMenuHide = new Array();
    subMenuHide.push($('.sub-menu'));
    $.each(subMenuHide, function(key, value) {
      if (!$(value).is(e.target)
        && $(value).has(e.target).length === 0)
      {
        $(value).slideUp(500);
      }
    });
  }
});
/*==================== 5. Mouseup Function END ====================*/

/* ********* START A. Sticky Header Js ********* */
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    $("#myHeader").addClass("sticky");
  } else {
    $("#myHeader").removeClass("sticky");
  }
  // if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
  //   $(".back-to-top").addClass("show");
  // } else {
  //   $(".back-to-top").removeClass("show");
  // }
}
/* ********* END A. Sticky Header Js ********* */

/* ********* START B. Testimonial Slider Js ********* */
function testimonialSlider() {
  $('.testimonialSlider').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});
}
/* ********* END B. Testimonial Slider Js ********* */

/* ********* START C. Our Gallery Slider Js ********* */
function ourGallerySlider() {
  $('.ourGallerySlider').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});
}
/* ********* END C. Our Gallery Slider Js ********* */

/* ********* START D. Light Gallery Image Popup Js ********* */
function lightGallery(){
  $('.tz-gallery').lightGallery({
    download: false,
    counter: false,
    getCaptionFromTitleOrAlt: false,
    mode: 'lg-fade',
    selector: '.lightbox'
  });
}
/* ********* END D. Light Gallery Image Popup Js ********* */