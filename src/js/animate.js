$(function () {
  $("#btn1").click(function () {
    $("#div1").animate(
      {
        width: "600px",
        height: "-=100px",
        left: "200px",
        fontSize: "64px",
      },
      4000
    );
  });
  $("#btn2").click(function () {
    $("#div1").animate(
      {
        width: "toggle",
      },
      4000
    );
  });
  $("#btn3").click(function () {
    $("#div1").animate({ width: "600px" }, 4000);

    $("#div1").queue(function () {
      $(this).css("background-color", "yellow");
      $(this).dequeue();
    });

    $("#div1").animate({ height: "600px" }, 4000);
    $("#div1").animate({ width: "300px" }, 4000);
    $("#div1").animate({ height: "300px" }, 4000);
  });
  $("#btn4").click(function () {
    $("#div1").stop();
  });
});
