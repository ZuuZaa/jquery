$(function () {
  $("#div1").on({
    click: function () {
      console.log("click");
    },
    mouseenter: function () {
      $("#div1").css("color", "red");
    },
    mouseleave: function () {
      $("#div1").css("color", "yellow");
    },
  });

  $("#btn").click(function () {
    $("#div1").off("mouseleave");
  });

  $("#div2").one({
    click: function () {
      console.log("click");
    },
    mouseenter: function () {
      $("#div2").css("color", "red");
    },
    mouseleave: function () {
      $("#div2").css("color", "yellow");
    },
  });

  var obj = {
    name: "zumrud",
    age: 38,
    change: function () {
      $("#div1").css("color", "black");
    },
  };

  $("#btn1").click($.proxy(obj, "change"));
});
