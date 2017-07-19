$(document).ready(function () {

  $(window).scroll(function(){
  		if ($(this).scrollTop() > 100) {
  			$('.scrollToTop').fadeIn();
  		} else {
  			$('.scrollToTop').fadeOut();
  		}
  	});
  	$('.scrollToTop').click(function(){
  		$('html, body').animate({scrollTop : 0},800);
  		return false;
  	});

$(function(){
var myMenu = $('.menu-img');
myMenu.on("mouseover", function(){
  $(this).addClass("menu-bigimg"); //
}).on("mouseout", function(){
  $(this).removeClass("menu-bigimg");
})
});
});
