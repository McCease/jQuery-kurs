
var myMenu = document.getElementById('my-menu'),
	btn = document.getElementById('btn-toggle'),
	opcja = document.getElementsByClassName('option');

btn.addEventListener('click',function(event){
	myMenu.classList.toggle('active');
	event.stopPropagation();
});
opcja[0].addEventListener('click',function(event){
	btn.innerHTML="Option 01";
	event.stopPropagation();
});
opcja[1].addEventListener('click',function(event){
	btn.innerHTML="Option 02";
	event.stopPropagation();
});
