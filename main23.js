$(document).on('ready', function () {
	$.ajax({
		url:"json23",
		dataType:'json'
	})
	.done(function(data){
		cosnole.log(data);
	})
});
