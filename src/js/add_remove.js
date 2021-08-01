$(function () {
  $("#btn").click(function () {
    $("#div1").append("js");
    $("#div1").prepend("js");
    $("#div1").after("html");
    $("#div1").before("css");
    $("#p1").remove();
    $("p").remove("#p2");

    var t1 = "<p>p5</p>";
    var t2 = $("<p>").text("p6");
    var t3 = (document.createElement("p").innerText = "p7");
    $("#div1").append(t2, t3);
    $("#div1").prepend(t1);
  });

  $("#btn2").click(function () {
    $('<p id="p0">p0</p>').appendTo("#div2");
    $("<span>hi</span>").prependTo("#div2");
    //$('<span>hi</span>').replaceAll('p');
    //or
    //$('p').replaceWith('<p>ola</p>');
    $("#p1").clone().appendTo("#div1");
  });

  $("#btn3").click(function () {
    $("#p10").addClass("red");
    //$('#p11').removeClass('blue');
    $("#p11").toggleClass("blue");
    $("#p12").removeAttr("class");

    var c = $("#p1").css("color");
    console.log(c);
    $("#p2").css({
      color: "red",
      "background-color": "yellow",
    });
  });
});
