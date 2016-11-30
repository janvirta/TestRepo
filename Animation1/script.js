var animation;
var pos;

function frame(direction, horVert) {
	if (pos == 300) {
		clearInterval(animation);
	} else if (horVert == "vertical") {
		pos++;
		document.getElementById("box").style.top = parseInt(document.getElementById("box").style.top) + direction + "px";
	} else if (horVert == "horizontal") {
		pos++;
		document.getElementById("box").style.left = parseInt(document.getElementById("box").style.left) + direction + "px";
	}
}

function goUp() {
	pos = 0;
	clearInterval(animation);
	animation = setInterval(function(){frame(-1, "vertical");}, 10);
}
	
function goDown() {
	pos = 0;
	clearInterval(animation);
	animation = setInterval(function(){frame(1, "vertical");}, 10);
}

function goLeft() {
	pos = 0;
	clearInterval(animation);
	animation = setInterval(function(){frame(-1, "horizontal");}, 10);
}

function goRight() {
	pos = 0;
	clearInterval(animation);
	animation = setInterval(function(){frame(1, "horizontal");}, 10);
}

function stop() {
	clearInterval(animation);
}