
var i=0
	myInput = document.getElementsByClassName('new_item'),
	myForm = document.getElementsByClassName('my-form'),
	myList = document.getElementsByClassName('my-list'),
	myDelete = document.getElementsByClassName('btn-delete');
	
myForm[0].addEventListener('submit', function(event){
	event.preventDefault();
	
	var listItem = document.createElement("li"),
		listItemText = document.createTextNode(myInput[0].value);
	
	listItem.innerHTML='<button class="btn-delete">Delete</button>';
	listItem.appendChild(listItemText);
	myList[0].appendChild(listItem);
	myInput[0].value = '';
	myDelete = document.getElementsByClassName('btn-delete');
			console.log(myDelete);
	for(i;i<myDelete.length;i++){

	myDelete[i].addEventListener('click', function(event){
		event.target.parentNode.remove();
		event.stopPropagation();
	});
	}

	event.stopPropagation();
});
	for(i;i<myDelete.length;i++){
	myDelete[i].addEventListener('click', function(event){
		event.target.parentNode.remove();
		event.stopPropagation();
	});
	}