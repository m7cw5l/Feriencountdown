function toTwoDigits(number) {
	return (number < 10 ? "0" : "") + number;
}

function countdown(end) {
	var x = setInterval(function() {
		var now = new Date().getTime();

		var distance = end.getTime() - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById('days').innerHTML = toTwoDigits(days);
		document.getElementById('hours').innerHTML = toTwoDigits(hours);
		document.getElementById('minutes').innerHTML = toTwoDigits(minutes);
		document.getElementById('seconds').innerHTML = toTwoDigits(seconds);

		if (distance < 0) {
			document.getElementById('days').innerHTML = "00";
			document.getElementById('hours').innerHTML = "00";
			document.getElementById('minutes').innerHTML = "00";
			document.getElementById('seconds').innerHTML = "00";

			clearInterval(x);
			window.location.reload(true);
		}
	}, 100)
}

const end = new Date("Mar 31, 2023 10:40:00");
countdown(end);