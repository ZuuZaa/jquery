$(function () {
  $("#btn").click(function () {
    $("div").first().css("color", "red");
    $("div").eq(1).css("border", "1px solid yellow");
    $("div").last().css("background-color", "green");
    $("div").filter(".c2").css("color", "yellow");
    $("div").not(".c3").css("background-color", "yellow");
  });
});
