$(function () {
  $("#drag").draggable({
    axis: "both",
    containment: "parent",
    start: function () {
      $("#p1").html("start");
      $("#container").css("background-color", "blue");
    },
    drag: function () {
      $("#p1").html("drag");
    },
    stop: function () {
      $("#p1").html("stop");
      $("#container").css("background-color", "yellow");
    },
  });
});
