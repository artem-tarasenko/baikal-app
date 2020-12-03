(function(window, document, undefined) {
	let timerID;


	function resetCounter() {
		clearInterval(timerID);
		setTimer();
	}
	function redirect() {
		console.log("TIMER: Redirection to main page...");
		window.location.replace("./index.html");
	}
	function setTimer() {
		timerID = setInterval(redirect, 300000);
	}


	window.addEventListener("click", resetCounter);
	setTimer();
})(window, document);
