$(document).ready(function(){
$(".menu-icon").click(function() {
    $(this).toggleClass("ak");
    $(".menuPage").toggleClass("appear");
});
$("h1").hide();
$("h3").hide();

$("h1").fadeIn(1000);
$("h3").fadeIn(1000);
  
});
