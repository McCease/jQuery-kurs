$(document).on('ready', function () {
	var $time=0,
		$score=0,
		$pixels=$('span');
		
	function time(){setInterval( function() {
			$time+=1;
			$('.time').text($time);
		},1000);
	};

	function game(){ setInterval( function() {
		
		$pixels.removeClass('active');
		
		$pixels.eq( Math.floor(Math.random() * $pixels.length)).addClass('active');
		
		},2000);
	};
	
	
	$('body').one('click', function(event){
		time();
		game();
		$pixels.eq( Math.floor(Math.random() * $pixels.length)).addClass('active');
	});
	
	$('span').on('click', function(event){
		if($(this).hasClass('active')){
			$('.score').text(++$score);
		}
		$pixels.removeClass('active');
	});

});
