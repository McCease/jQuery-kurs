$(document).on('ready', function () {
	$('.title').css('fontWeight','bold');
	$('.footer').css('fontStyle','italic');
	$('tr:even td:even , tr:odd td:odd').css('backgroundColor','red');
	$('tr:even td:odd , tr:odd td:even').css('backgroundColor','yellow');
	
});
