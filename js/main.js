$(document).ready(function(){
	$('.section-footer').height($(window).height())
})

$('.navbar a').click(function(){
	$('body, html').animate({
		scrollTop:$('#' + $(this).data('value')).offset().top}, 1000)
})


