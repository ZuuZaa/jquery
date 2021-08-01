$(function () {
  $("#btn2").click(function () {
    $("#div1").delay(3000).hide(3000);
    $("#div2").hide(6000);
    $("#div3").hide(9000); //'slow' 'fast'
  });
  $("#btn1").click(function () {
    $("#div1").show(3000);
    $("#div2").show(6000);
    $("#div3").show(9000);
  });
  $("#btn3").click(function () {
    $("#div1").toggle(3000);
    $("#div2").toggle(6000);
    $("#div3").toggle(9000);
  });
  // effect
  $("#btn4").click(function () {
    $("#div1").fadeIn(3000);
    $("#div2").fadeIn(6000);
    $("#div3").fadeIn(9000);
  });
  $("#btn5").click(function () {
    $("#div1").fadeOut(3000);
    $("#div2").fadeOut(6000);
    $("#div3").fadeOut(9000);
  });
  $("#btn6").click(function () {
    $("#div1").fadeToggle(2000);
    $("#div2").fadeToggle(4000);
    $("#div3").fadeToggle(6000);
  });
  $("#btn7").click(function () {
    $("#div1").fadeTo(2000, 0.2);
    $("#div2").fadeTo(4000, 0.4);
    $("#div3").fadeTo(6000, 0.6);
  });
});
