$(function () {
  $("#btn").click(function () {
    $("#div1").width("200px");
    $("#div1").height("200px");

    var w = $("#div1").width();
    var h = $("#div1").height();
    var iw = $("#div1").innerWidth(); //padding
    var ih = $("#div1").innerHeight(); //padding
    var ow = $("#div1").outerWidth(); // border+paddig
    var oh = $("#div1").outerHeight();
    var tw = $("#div1").outerWidth(true); // border+paddig+margin
    var th = $("#div1").outerHeight(true);

    $("#p1").html(
      w +
        "<br>" +
        h +
        "<br>" +
        iw +
        "<br>" +
        ih +
        "<br>" +
        ow +
        "<br>" +
        oh +
        "<br>" +
        tw +
        "<br>" +
        th
    );
  });
});
