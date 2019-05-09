let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

//Line
//context.moveTo(20,20);
//context.lineTo(300,300);
//context.lineWidth=5;
//context.stroke();

//Rectangle
//context.lineWidth=5;
//context.strokeStyle="#000000";
//context.strokeRect(20, 20, 80, 100);

//Circle
//context.beginPath();
//context.arc(130,130,40,0,2*Math.PI);
//context.closePath();
//context.stroke();

//opdracht, morty.
//refference: https://unconventionaut.files.wordpress.com/2014/11/morty.png

//Hair
context.fillStyle = '#994c00';
context.beginPath();
context.arc(200,150,150,0,2*Math.PI);
context.closePath();
context.fill();


//Head
context.fillStyle = '#ffe0bd';
context.beginPath();
context.arc(200,200,150,0,2*Math.PI);
context.closePath();
context.fill();

//Left Ear
context.fillStyle = '#ffe0bd';
context.beginPath();
context.arc(335,180,40,0,2*Math.PI);
context.closePath();
context.fill();
//Right Ear
context.fillStyle = '#ffe0bd';
context.beginPath();
context.arc(65,180,40,0,2*Math.PI);
context.closePath();
context.fill();

//Eyes
//Right
context.fillStyle= '#ffffff';
context.beginPath();
context.arc(280,160,40,0,2*Math.PI);
context.closePath();
context.fill();

context.fillStyle = '#000000';
context.beginPath();
context.arc(280,160,10,0,2*Math.PI);
context.closePath();
context.fill();

//Left
context.fillStyle= '#ffffff';
context.beginPath();
context.arc(130,160,40,0,2*Math.PI);
context.closePath();
context.fill();

context.fillStyle = '#000000';
context.beginPath();
context.arc(130,160,10,0,2*Math.PI);
context.closePath();
context.fill();

//Nose
context.beginPath();
context.arc(190,220,15,0.7,1.4*Math.PI);
context.stroke();

//Eyebrows
context.beginPath();
context.arc(130,155,50,3.2,1.9*Math.PI)
context.stroke();


context.beginPath();
context.arc(280,155,50,3.2,1.9*Math.PI)
context.stroke();

//Mouth
context.fillStyle = '#000000';
context.beginPath();
context.arc(200,280,40,6,1*Math.PI);
context.closePath();
context.stroke();
