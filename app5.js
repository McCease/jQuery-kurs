setInterval(function(){
var dataGodzina=new Date(),
	result='',
	zegar=document.getElementById('clock'),
	dayW='',
	dayM='',
	h='',
	m='',
	s='';
	
switch (dataGodzina.getDay()) {
    case 0:
        dayW = "Sunday";
        break;
    case 1:
        dayW = "Monday";
        break;
    case 2:
        dayW = "Tuesday";
        break;
    case 3:
        dayW = "Wednesday";
        break;
    case 4:
        dayW = "Thursday";
        break;
    case 5:
        dayW = "Friday";
        break;
    case 6:
        dayW = "Saturday";
        break;
}
switch (dataGodzina.getMonth()) {
    case 0:
        dayM = "January";
        break;
    case 1:
        dayM = "February";
        break;
    case 2:
        dayM = "March";
        break;
    case 3:
        dayM = "April";
        break;
    case 4:
        dayM = "May";
        break;
    case 5:
        dayM = "June";
        break;
    case 6:
        dayM = "July";
        break;
	case 7:
        dayM = "August";
        break;
	case 8:
        dayM = "September";
        break;
	case 9:
        dayM = "October";
        break;
	case 10:
        dayM = "November";
        break;
	case 11:
        dayM = "December";
        break;
}
if(dataGodzina.getHours()<10){
	h='0'+dataGodzina.getHours();
}else 
	h=dataGodzina.getHours();

if(dataGodzina.getMinutes()<10){
	m='0'+dataGodzina.getMinutes();
}else 
	m=dataGodzina.getMinutes();

if(dataGodzina.getSeconds()<10){
	s='0'+dataGodzina.getSeconds();
}else 
	s=dataGodzina.getSeconds();

result = h + ':' + m + ':' + s +' ' + dayW + ', ' + dataGodzina.getDay() + ' ' + dayM + ' ' + dataGodzina.getFullYear();
zegar.innerHTML= result.toString();
}, 1000);
