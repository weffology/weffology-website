$(document).ready(function () {

  $(window).scroll(scrollFunction);
  function scrollFunction() {
    if ($(document).scrollTop() > 400) {
      $("nav").addClass("navScroll");
      $("nav a").addClass("navScroll");
      $("nav").removeClass("navbar-light");
      $("nav").removeClass("navStart");
      $("nav").addClass("navbar-dark");
      $("#mainLogo").attr("src", "assets/img/weffology-logo-white.png");
    } else if ($(document).scrollTop() < 400) {
      $("nav").removeClass("navScroll");
      $("nav a").removeClass("navScroll");
      $("nav").removeClass("navbar-dark");
      $("nav").addClass("navbar-light");
      $("nav").addClass("navStart");
      $("#mainLogo").attr("src", "assets/img/weffology-logo.png");
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

});