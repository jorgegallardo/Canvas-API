

window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
}

function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "twitterBird.png";

	twitterBird.onload = function() {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};
}


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
	drawText(canvas, context);
	drawBird(canvas, context);
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

function updateTweets(tweets) { //callback function, passed an array of tweets
	var tweetsSelection = document.getElementById("tweets"); //find tweets in html form

	for (var i = 0; i < tweets.length; i++) { //for each tweet
		tweet = tweets[i]; //get the tweet
		var option = document.createElement("option"); //make an option element
		option.text = tweet.text; //set the text of the option element to the tweet
		option.value = tweet.text.replace("\"", "'"); //and set the value of the option to the tweet, but replace double quotes with single quotes

		tweetsSelection.options.add(option); //take the new option and add it to the tweet selection in the form
	}
	tweetsSelection.selectedIndex = 0; //make sure the first tweet is selected
}

function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;
	context.fillStyle = fgColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40)

	selectObj = document.getElementById("tweets");
	index = selectObj.selectedIndex;
	var tweet = selectObj[index].value;
	context.font = "italic 1.2em serif";
	context.fillText(tweet, 30, 100);

	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!", canvas.width-20, canvas.height-40);
}