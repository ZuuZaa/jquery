$(function(){
    $('#btn').click(function(){
        var a = $('#p1').text();
        var b = $('#p1').html();
        var i = $('#txt').val();
        var atr = $('#events').attr('href');
        alert(a +' '+b+' '+i+" "+atr);
        $('#p2').text('<b>salam</b>');
        $('#p3').html('<b>salam</b>');
        $('#p3').attr('id','changed');
        $('#events').attr({
            'href': 'index.html',
            'target': '_self'
        });
        $('#txt').val('salam');
    });

});