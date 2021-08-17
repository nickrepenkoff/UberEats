$(document).ready(function () {
  $('.location-btn').click(function (event) {
    $('.mobile-location').toggle();
  });
  $('.search-btn').click(function (event) {
    $('.mobile-search').toggle();
  });
  $('.mobile__address-close').click(function (event) {
    $('.mobile-location, .mobile-search').hide();
  });
});