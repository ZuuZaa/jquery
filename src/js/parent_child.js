$(function () {
  $("#btn").click(function () {
    $("span").parent().css("border", "1px solid yellow");
    $("span").parents().css("color", "blue");
    $("span").parents("#div1").css("border", "1px solid red");
    $("span").parentsUntil("#div1").css("border", "1px solid black");
  });
  $("#btn1").click(function () {
    $("#div1").children().css("color", "red");
    $("#div2").children("#div3").css("border", "1px solid black");
    $("#div1").find("span").css("border", "1px solid black");
    $("#div2").children("*").css("color", "yellow");
    $("#div3").siblings().css("background-color", "green");
  });

  // next() nextUntill() nextAll()
  // prev() prevAll() prevUntil()
});
