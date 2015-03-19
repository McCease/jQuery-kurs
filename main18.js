$(document).on('ready', function () {
	var color='red';
	
	$('select').on('click', function(event){
		color=$('select').val();
	});
	
	$('span').on('click', function(event){
			$(this).css('backgroundColor', color);
	});

});
