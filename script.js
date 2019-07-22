var hourHand = document.getElementById('hour');
var minuteHand = document.getElementById('minute');
var secondHand = document.getElementById('second');

function initClock() {
    var date = new Date();
    var hour = date.getHours() % 12;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var hourDeg = hour * 30 + minute * 0.5;
    var minuteDeg = minute * 6 + second * 0.1;
    var secondDeg = second * 6;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    setTimeout(() => initClock(), 1000);

}
initClock();
