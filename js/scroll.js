$("#Home").click(function(e){
    var targetOffset= $("#page1").offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 1000);
    e.preventDefault();    
    $("#nav a:hover").css("color","#ff564f");
    $("p").css("color","#ff564f");
});

$("#Log-in").click(function(e){
    var targetOffset= $("#page2").offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 1000);
    e.preventDefault();
    $("#nav a:hover").css("color","#ff714f");   
    $("p").css("color","#ff714f"); 
});

$("#About").click(function(e){
    var targetOffset= $("#page3").offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 1000);
    e.preventDefault();    
    $("#nav a:hover").css("color","#ff8b4f");
    $("p").css("color","#ff8b4f");
});

$("#Contact").click(function(e){
    var targetOffset= $("#page4").offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 1000);
    e.preventDefault();    
    $("#nav a:hover").css("color","#ffa64f");
    $("p").css("color","#ffa64f");
});