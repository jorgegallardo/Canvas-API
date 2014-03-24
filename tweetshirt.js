window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
};

function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d"); //an object that controls access to the canvas
	fillBackgroundColor(canvas, context);

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;

	if(shape == "squares") {
		for(var squares = 0; squares < 20; squares++) {
			drawSquare(canvas, context);
		}
	}
	else if(shape == "circles") {
		for(var circles = 0; circles < 20; circles++) {
			drawCircle(canvas, context);
		}
	}
}

function drawSquare(canvas, context) {
	var w = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.fillStyle = "lightblue"; //fillStyle is a property of context, so we have to set it to a value (not call it)
	context.fillRect(x, y, w, w);
}

function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj.options[index].value;
	context.fillStyle = bgColor;
	context.fillRect(0,0, canvas.width, canvas.height);
}

function degreesToRadians(degrees) {
	return (degrees * Math.PI)/180;
}

function drawCircle(canvas, context) {
	var radius = Math.floor(Math.random() * 40); //keeping the max radius size at 40
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);

	context.fillStyle = "lightblue";
	context.fill();
}