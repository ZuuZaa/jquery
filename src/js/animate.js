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
  //----- call back --------
  $("#btn5").click(function () {
    $("#div1").hide(4000, function () {
      alert("it is hidden");
      $(this).show(4000, function () {
        $(this).fadeOut(4000, function () {
          $(this).fadeIn(4000);
        });
      });
    });
  });
  // ----- chaining -------
  $("#btn6").click(function () {
    setInterval(function () {
      $("#div1").hide(2000).show(2000).fadeOut(2000).fadeIn(2000);
    }, 8000);
  });
});
