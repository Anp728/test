$(document).ready(function(){ 

	$('#scrollup').mouseover( function(){
		$( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).on('click', function(){
		$('html, body').animate({scrollTop:0}, 'normal');
		return false;
	});
	
	var showHideButton = function() {
		if ($(document).scrollTop() > $(".centre > img").offset().top) {
			$('#scrollup').fadeIn('fast');
		} else {
			$('#scrollup').fadeOut('fast');
		}
	}
	
	showHideButton();
	
	$(window).scroll(function(){
		showHideButton();
	});

});