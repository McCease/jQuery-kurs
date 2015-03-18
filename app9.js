
var canvas = document.getElementById('image'),
	context = canvas.getContext('2d');

context.fillStyle = 'yellow';
context.fillRect(0,0,100,100);
context.strokeRect = (0,0,100,100);

context.fillStyle = 'brown';
context.fillRect(190,0,100,100);

context.fillStyle = 'red';
context.fillRect(40,40,100,100);

context.fillStyle = 'blue';
context.fillRect(150,40,100,100);

context.fillStyle = 'green';
context.fillRect(100,80,100,100);