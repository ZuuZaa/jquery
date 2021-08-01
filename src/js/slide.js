$(function () {
  $("#btn1").click(function () {
    $("#div1").slideUp(3000);
  });
  $("#btn2").click(function () {
    $("#div1").slideDown(3000);
  });
  $("#btn3").click(function () {
    $("#div1").slideToggle(3000);
  });
});
