$("#Home").click(function(e){
    var targetOffset= $("#page1").offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 1000);
    e.preventDefault();    
});

$("#Log-in").click(function(e){
    var targetOffset= $("#page2").offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 1000);
    e.preventDefault();   
});

$("#About").click(function(e){
    var targetOffset= $("#page3").offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 1000);
    e.preventDefault();    
    /*$("h1").css("color","#56131C"); */
});

$("#Contact").click(function(e){
    var targetOffset= $("#page4").offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 1000);
    e.preventDefault();    
    $("h1").css("color","#707405");
});