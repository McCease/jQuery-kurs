
var dataGodzina=new Date(),
	zegar=document.getElementById('clock'),
	dataUzytkownika=prompt('Podaj date w formacie YYYY-MM-DD');
	
console.log(dataUzytkownika.slice(0,4));	
console.log(dataUzytkownika.slice(5,7));
console.log(dataUzytkownika.slice(8));

console.log(dataGodzina.getFullYear());
console.log(dataGodzina.getMonth()+1);
console.log(dataGodzina.getDate());

if(dataUzytkownika.slice(0,4)<dataGodzina.getFullYear()){
	zegar.innerHTML='Past Date';
}else if(dataUzytkownika.slice(0,4)>dataGodzina.getFullYear()){
	zegar.innerHTML='Future Date';
}else if(dataUzytkownika.slice(5,7)<dataGodzina.getMonth()+1){
	zegar.innerHTML='Future Date';
}else if(dataUzytkownika.slice(5,7)>dataGodzina.getMonth()+1){
	zegar.innerHTML='Future Date';
}else if(dataUzytkownika.slice(8)<dataGodzina.getDate()){
	zegar.innerHTML='Future Date';
}else if(dataUzytkownika.slice(8)>dataGodzina.getDate()){
	zegar.innerHTML='Future Date';
}else
	zegar.innerHTML='Today';

