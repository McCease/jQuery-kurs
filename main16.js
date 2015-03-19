$(document).on('ready', function () {
	$('li').each(function(index){
		$(this).text('text ' + (index+1));
		if(index<5){
			$(this).css('backgroundColor','red').prepend('<span>Span </span>');
		} else {
			$(this).css('backgroundColor','lightblue').append('<span> Span</span>');
		}
	});

});
