
var saveBtn = document.getElementById('saveBtn'),
	poleTekstowe = document.getElementById('textarea');
	
saveBtn.addEventListener('click', function(event){
		window.localStorage.setItem('tekstDoZapisu', poleTekstowe.value);
		event.stopPropagation();
	});
	
	poleTekstowe.value=window.localStorage.getItem('tekstDoZapisu');