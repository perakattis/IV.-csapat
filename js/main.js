$(document).ready(function() {
  $(".cs_map").css("height", $(".cs_info").height());
  $(window).resize(function() {
    $(".cs_map").css("height", $(".cs_info").height());
  });
});
