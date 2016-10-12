var DIGITS_HOUR_MIN_SEC = 2;
var DIGITS_MILLISECOND = 3;

function refreshTimeValues() {
	// get current time values
	var now = new Date();
	var currentHours = now.getHours();
	var currentMinutes = now.getMinutes();
	var currentSeconds = now.getSeconds();
	var currentMilliseconds = now.getMilliseconds();

	// set time values in DOM
	var hours = document.getElementById('hours');
	hours.innerHTML = zeroPadValue(currentHours, DIGITS_HOUR_MIN_SEC);

	var minutes = document.getElementById('minutes');
	minutes.innerHTML = zeroPadValue(currentMinutes, DIGITS_HOUR_MIN_SEC);

	var seconds = document.getElementById('seconds');
	seconds.innerHTML = zeroPadValue(currentSeconds, DIGITS_HOUR_MIN_SEC);

	var milliseconds = document.getElementById('milliseconds');
	milliseconds.innerHTML = zeroPadValue(currentMilliseconds, DIGITS_MILLISECOND);
}

function zeroPadValue(value, digits) {
	// convert to string
	var stringValue = value.toString();

	// pad zeroes if less than desired digits
	if (stringValue.length < digits) {
		var zeroesToAppend = digits - stringValue.length + 1;
		return Array(zeroesToAppend).join('0') + stringValue;
	} else {
		return stringValue;
	}
}

function hideLoadingStatus() {
	var loading = document.getElementById('loading');
	loading.style.display = 'none';
}

function showClock() {
	var clock = document.getElementById('clock');
	clock.style.display = 'block';
}

function initialize() {
	refreshTimeValues();
	hideLoadingStatus();
	showClock();	
}

function startTimer() {
	setInterval(refreshTimeValues, 1);
}

initialize();
startTimer();
