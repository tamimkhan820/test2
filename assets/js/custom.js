
    let hoursElement = document.getElementById('hours');
    let minitElement = document.getElementById('minit');
    let secondsElement = document.getElementById('seconds');
    let ampmElement = document.getElementById('ampm');



function ourDigitalClock() {

    let now = new Date();

    let hoursNumber = (now.getHours()) > 12 ? (now.getHours()) -12 : (now.getHours());
    let minitNumbet = now.getMinutes();
    let secondsNumber = now.getSeconds();

    let ampmString = (now.getHours()) < 12 ? 'am' : 'pm';
    
    hoursElement.innerHTML = (hoursNumber) < 10 ? '0' + (hoursNumber) : (hoursNumber);
    minitElement.innerHTML = (minitNumbet) < 10 ? '0' + (nminitNumbet) :  (minitNumbet);
    secondsElement.innerHTML = (secondsNumber) < 10 ? '0' + (secondsNumber) : (secondsNumber);
    ampmElement.innerHTML = ampmString;
}

setInterval(ourDigitalClock, 1000);