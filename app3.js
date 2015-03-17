
var i=0
	przyciskUsun = document.getElementsByClassName('btn--delete');

for(i;i<przyciskUsun.length;i++){
	przyciskUsun[i].addEventListener('click', function(event){
		event.target.parentNode.remove();
				
		//event.target.parentNode.parentNode.removeChild(event.target.parentNode);
		event.stopPropagation();
	});
}