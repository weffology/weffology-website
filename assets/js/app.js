$(document).ready(function () {

  $(window).scroll(scrollFunction);
  function scrollFunction() {
    if ($(document).scrollTop() > 700) {
      $("nav").addClass("navScroll");
      $("nav a").addClass("navScroll");
      $("nav").removeClass("navbar-light");
      $("nav").removeClass("navStart");
      $("nav").addClass("navbar-dark");
      // $("#buttonTop").removeClass("hideButton");
      $("#mainLogo").attr("src", "assets/img/weffology-logo-white.png");
    } else if ($(document).scrollTop() < 700) {
      $("nav").removeClass("navScroll");
      $("nav a").removeClass("navScroll");
      $("nav").removeClass("navbar-dark");
      $("nav").addClass("navbar-light");
      $("nav").addClass("navStart");
      // $("#buttonTop").addClass("hideButton");
      $("#mainLogo").attr("src", "assets/img/weffology-logo.png");
    }
  };

  $(window).scroll(buttonAppear);
  function buttonAppear() {
    if ($(document).scrollTop() > 100) {
      $("#buttonTop").removeClass("hideButton");
    } else if ($(document).scrollTop() < 100) {
      $("#buttonTop").addClass("hideButton");
    }
  };


  $("#web-dev-icon").hover(hoverInWeb, hoverOutWeb);
  function hoverInWeb() {
    $(this).attr("src", "assets/img/web-dev-icon-rainbow.png");
  };
  function hoverOutWeb() {
    $(this).attr("src", "assets/img/web-dev-icon.png");
  };

  $("#marketing-icon").hover(hoverInMarketing, hoverOutMarketing);
  function hoverInMarketing() {
    $(this).attr("src", "assets/img/marketing-icon-rainbow.png");
  };
  function hoverOutMarketing() {
    $(this).attr("src", "assets/img/marketing-icon.png");
  };

  $("#camera-icon").hover(hoverInCamera, hoverOutCamera);
  function hoverInCamera() {
    $(this).attr("src", "assets/img/camera-icon-rainbow.png");
  };
  function hoverOutCamera() {
    $(this).attr("src", "assets/img/camera-icon.png");
  };

  $("#buttonTop").click(function() {
    window.scrollTo(0,0);
  });

});