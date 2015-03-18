var i=0,
	myInput = document.getElementsByClassName('new_item'),
	myForm = document.getElementsByClassName('my-form'),
	myList = document.getElementsByClassName('my-list'),
	storedList = window.localStorage.getItem("lista") || [],
	tempList = JSON.parse(storedList),
	i=0;

	
for(i=0;i<tempList.length;i++){
	var listItem = document.createElement("li"),
		listItemText = document.createTextNode(tempList[i]);
	listItem.appendChild(listItemText);	
	myList[0].appendChild(listItem);
	
};
	
myForm[0].addEventListener('submit', function(event){
	
	event.preventDefault();
	
	var listItem = document.createElement("li"),
		listItemText = document.createTextNode(myInput[0].value);
	
	listItem.appendChild(listItemText);
	myList[0].appendChild(listItem);
	
	storedList = JSON.parse(window.localStorage.getItem("lista")) || [];
	storedList.push(myInput[0].value);
	window.localStorage['lista']=JSON.stringify(storedList);
	
	myInput[0].value = '';
	event.stopPropagation();
});
