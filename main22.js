$(document).on('ready', function () {
	$('.box').first().css('opacity' , '1');
	$('.box').first().animate({marginTop: "300px"}, function(){
		$('.box').eq(1).css({'opacity' : '1', 'border-color' : 'blue'});
		$('.box').eq(1).animate({marginTop: "300px", }, function(){
			$('.box').eq(2).css({'opacity' : '1' , 'border-color' : 'green'});
			$('.box').eq(2).animate({marginTop: "300px"})
		})
	});
});
