"use strict";

function cycleImages(){
	var $active = $('#background_cycler .active');
	var $next = ($('#background_cycler .active').next().length > 0) ? $('#background_cycler .active').next() : $('#background_cycler div:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
}

$(window).load(function(){
	$('#background_cycler').fadeIn(1500);
	setInterval('cycleImages()', 6000);
})

$(function() {
});
