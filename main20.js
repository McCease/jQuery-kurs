$(document).on('ready', function () {

	$('form').on('submit', function(event){
		event.preventDefault();	
		var $amountPLN=$('input').val();
		
		$.getJSON( "http://www.nbp.pl/", function( data ) {
				console.log(data.$('table:nth-of-type(16)'));
				
		});
		
		
		
		$('.eur').first().text($amountPLN*3);
		$('.usd').last().text($amountPLN*4);
		$('input').val('');
	})

});
