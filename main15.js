$(document).on('ready', function () {
	$('div').css('borderWidths','1').css('borderStyle','solid');
	
	var $divs=$('div');
	$divs.first().siblings().addBack().css('fontWeight' , 'bold').children().css('backgroundColor' , 'lightgreen');
	$divs.first().siblings(':nth-of-type(4)').css('fontWeight' , 'normal').children().last().css('backgroundColor' , 'red');

});
