$(document).on('ready', function () {

	var $list=$('#my-todo'),
		$form=$('#my-form'),
		$input=$('#new_item');
	$form.on('submit', function(event){
		event.preventDefault();
		$list.append('<li>' + $input.val() + '</li>');
		
		$input.val('');
	})
	$list.on('dblclick', 'li', function(){
		$(this).fadeOut(500, function (){
			$(this).remove();
		});
	});
});
