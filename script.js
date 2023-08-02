//your JS code here. If required.
function getCurrent() {
	const now=new Date();
	const date=now.toLocalDateString();
	const time=now.toLocalTimeString();
	return '${date} ${time}';
}
function updateTimer() {
	const timeElement=document.getElementById('timer');
	timerElement.textContent=getCurrent();
	
	
}

setInterval(updateTimer,1000);


