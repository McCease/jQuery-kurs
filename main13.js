$(document).on('ready', function () {
    $('#header,span.popup').hide();
	$('#header').fadeIn(2000, 'swing', function(){
		$('span.popup').fadeIn(2000, function (){
			$('#header').fadeOut(2000);
		});
	});
});
