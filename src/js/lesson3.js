$(function(){
    $('#frm').submit(function(){
        console.log('form');
    });
    $('#username').change(function(){
        $('body').css('background-color','yellow');
    });
    $('#username').focus(function(){
        $('#username').css('background-color','yellow');
    }); //focusin
    $('#username').blur(function(){
        $('#username').css('background-color','black');
    }); //focusout

    $('#password').select(function(){
        $('#password').css('background-color', 'red');
    });
    $('#btn1').click(function(){
        $('#password').trigger('select');
    });


    // scroll
    
    var x = 0;

    $('#div1').scroll(function(){
        $('#p1').text(x+=1);
    });

    //resize
    $(window).resize(function(){
        var w = $(window).width();
        var h = $(window).height();

        $('#p2').text('width: '+ w + ' height: '+ h);
    });



});