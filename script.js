$(".Part-Two-Yes").hide();
$(".yes-button").click(function() {
    $(".firstclass").hide();
    $(".Part-Two-Yes").fadeIn();
    $(".end2").hide();
    $(".end3").hide();
    
});

$(".no-button").click(function() {
    $(".firstImage").hide();
    $(".title").hide();
    $(".yes-button").hide();
    $(".no-button").hide();
    $(".help").hide();
    $(".bye").fadeIn();
    $(".restart").fadeIn();
    $(".end2").hide();
    $(".end3").hide();
  
});
$(".bye").dblclick(function(){
    $(".firstImage").show();
    $(".title").show();
    $(".yes-button").show();
    $(".no-button").show();
    $(".help").show();
    $(".bye").hide();
    $(".restart").hide();
    $(".end2").hide();
    $(".end3").hide();
});
$(".map1").click(function(){
    $(".maps").fadeOut();
    $(".hide").text("They returned the ball back");
    $(".hide1").text("*Hover Over to see what happens next");
    $("body").css("background-image","url(https://media.istockphoto.com/id/1309335228/video/spotlights-shining-above-the-volleyball-court-and-view-of-the-player-from-the-back-line.jpg?s=640x640&k=20&c=mXBXX45X6UWLD_Ep4FtUfixTOEJPiR1vrwMkZRGPu50=)");
    $(".fly").show();
    $(".end2").hide();
    $(".end3").hide();
});
$(".map2").click(function(){
    $(".maps").fadeOut();
    $(".hide").text("You being a ball hog has game the other team match point resulting in your lost");  
    $("body").css("background-image","url(https://pbs.twimg.com/media/F6xndMpbgAEZRSJ.jpg:large)");
    $(".end").slideDown("slow");
    $(".end2").hide();
    $(".end3").hide();
    $(".reset").show();
});
$(".fly").mouseenter(function(){
    $(".hide").text("You must do the same ow return the ball back ");
    $(".hide1").text("*Double Click to start the attack*");
    $("body").css("background-image","url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14wZ7BaSIls7acRBELfJGgSQouUTfGFSBfFKwLi7e9uDZH7AJymbes66epFAzYluvs-Y&usqp=CAU)");
    $(".end2").hide();
    $(".end3").hide();
});
$(".fly").dblclick(function(){
    $(".hide").text("the ball seems to be going out and it match point");
    $(".hide1").text("*Unhover to see if you win or lose*");
    $("body").css("background-image","url(https://uploads-ssl.webflow.com/5bad8809d1de42c3b84c81ff/5c9042fa5ef96f0ad7b3bedc_50%3A50%20Logo%201%20-%20Black%20png.png)");
    $(".end2").hide();
    $(".end3").hide();
});
$(".fly").mouseleave(function(){
    $("body").css("background-image","url(https://siouxlandnews.com/resources/media2/16x9/full/1015/center/80/0687af3d-df28-4743-9452-2a1d685199ad-large16x9_briarcliff.PNG)");
    $(".fly").hide();
    $(".end").hide();
    $(".end2").show();
    $(".end3").show();
    $(".hide").text("Congrats you win (click this text to receive)");
    $(".hide1").text("you can claim your cash now");
    $(".reset").show();
});
$(".hide").click(function(){
    $(".end2").toggle();
    $(".end3").toggle();
});
$(".reset").click(function(){
	$(location).attr('href','https://johno107.github.io/Unit-6-Project/');
});
