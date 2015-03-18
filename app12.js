
var canvas = document.getElementById('image');

if(canvas.getContext){
	var ctx=canvas.getContext('2d');
	


//poziome plot
	ctx.beginPath();
	ctx.strokeStyle='grey';
	
	ctx.moveTo(0,250);
	ctx.lineTo(230,250);
	ctx.moveTo(230,200);
	ctx.lineTo(0,200);
	
//szczeble plot
	ctx.moveTo(40,180);
	ctx.lineTo(40,280);
	
	ctx.moveTo(80,180);
	ctx.lineTo(80,280);
	
	ctx.moveTo(120,180);
	ctx.lineTo(120,280);
	
	ctx.moveTo(160,180);
	ctx.lineTo(160,280);
	
	ctx.moveTo(200,180);
	ctx.lineTo(200,280);
	
	ctx.stroke();
	
//domek
	ctx.beginPath();
	ctx.strokeStyle='red';

	ctx.moveTo(230,100);
	ctx.lineTo(230,280);
	ctx.lineTo(500,280);
	ctx.lineTo(500,100);
	
	ctx.stroke();
	
//dach
	ctx.beginPath();
	ctx.strokeStyle='brown';

	ctx.moveTo(510,100);
	ctx.lineTo(220,100);
	ctx.lineTo(370,0);
	ctx.lineTo(510,100);
	
//okna

	ctx.moveTo(260,130);
	ctx.lineTo(330,130);
	ctx.lineTo(330,180);
	ctx.lineTo(260,180);
	ctx.lineTo(260,130);
	
	ctx.moveTo(400,130);
	ctx.lineTo(470,130);
	ctx.lineTo(470,180);
	ctx.lineTo(400,180);
	ctx.lineTo(400,130);
	
//drzwi

	ctx.moveTo(390,280);
	ctx.lineTo(390,200);
	ctx.lineTo(340,200);
	ctx.lineTo(340,280);
	ctx.lineTo(390,280);
	ctx.moveTo(340,240);
	ctx.lineTo(350,240);
	
	ctx.stroke();
	
//komin
	ctx.beginPath();
	ctx.strokeStyle='black';

	ctx.moveTo(450,58);
	ctx.lineTo(450,15);
	ctx.lineTo(470,15);
	ctx.lineTo(470,71);
	
	ctx.stroke();

	
	
}