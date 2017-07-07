
// page visibility stuff - pauses render of scene if user moves to another tab
var hidden, visibilityChange;
var ascene = document.querySelector('a-scene');
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
	hidden = "hidden";
	visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
	hidden = "msHidden";
	visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
	hidden = "webkitHidden";
	visibilityChange = "webkitvisibilitychange";
}
var handleVisibilityChange = function () {
	if (document[hidden]) {
		ascene.pause();
	} else {
		ascene.play();
	}
}

document.addEventListener(visibilityChange, handleVisibilityChange, false);