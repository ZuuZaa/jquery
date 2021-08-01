$(function () {
  $("#btn").dblclick(function () {
    $("#div1").css("background-color", "red");
  });
  $("#div1").mouseenter(function () {
    $("#div1").css("background-color", "yellow");
  }); //mouseover or hover
  $("#div1").mouseleave(function () {
    $("#div1").css("background-color", "blue");
  }); //mouseout
  $("#div2").mousedown(function () {
    $("#div2").css("background-color", "yellow");
  });
  $("#div2").mouseup(function () {
    $("#div2").css("background-color", "green");
  });
  $("#text").keypress(function () {
    $("#div2").css("border", "1px solid black");
  });
  $("#text").keyup(function () {
    $("#div1").css("border", "1px solid black");
  });
});
