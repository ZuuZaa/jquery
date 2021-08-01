$(function () {
    $("#btn").click(function () {
      $("tr:odd").css("color", "green");

      $("p").css("color", "red");
      $("p.p1").css("background-color", "green");
      $("p:first").css("border", "1px solid black");
      $('p:contains("p2")').css("border", "1px solid blue");
      $('p:not(:contains("p2"))').css("border", "1px solid yellow");
      $("div".has("p")).css("border", "1px solid yellow");

      $("ul li:first").css("color", "yellow");
      $("ul li:last-child").css("color", "blue");

      $("[class]").css("margin", "5%");
      $('[class != "p2"]').css("padding", "5%");

      $(":checked").css("color", "blue");
      $(":button").css("color", "yellow");

      $(this).css("border-radius", "50%");
    });
  });