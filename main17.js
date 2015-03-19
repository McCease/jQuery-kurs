$(document).on('ready', function () {
	$('.click-once').on('click', function(event){
		event.preventDefault();
		alert('No more clicks!');
		$(this).attr('disabled','disabled');
	});
	
	$('.click-more').on('click', function(event){
		event.preventDefault();
		alert('You can clickk all the time.');
	});

});
