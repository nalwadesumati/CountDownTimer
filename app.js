const cl= console.log;

///target date = 15 march 2026;
// difference = targetDate - currentDate (milliseconds);


const countDownHandler = ()=>{
	let currentTime = Date.now();
cl(currentTime);
	const setZero = (num)=>{
		return (num<10)?"0" + num:num;
	}
let targetDate = new Date("15 march 2026 23:59:59").getTime();
cl(targetDate);
let currentDate = 86400000
cl(currentDate);

let diff = targetDate - currentTime;

let days= (diff/(86400000));
let daysInt = Math.floor(days);
cl(days);
cl(daysInt);

let hr = (diff % (1000*60*60*24))/(1000*60*60);
cl(hr);
let hrInt = Math.floor(hr);
cl(hrInt);

let min = (diff %(1000*60*60)/(1000*60));
cl(min);
let minInt = Math.floor(min);
cl(minInt);

let sec = (diff %(1000*60)) /1000
cl(sec);
let secInt = Math.floor(sec);
cl(secInt);
const countDown = document.getElementById("digitalclock").innerHTML = `${setZero(daysInt)} Days ${setZero(hrInt)} Hours ${setZero(minInt)} Min ${setZero(secInt)} Sec`


// if (diff < 0){
	// clearInterval()
	// countDown.innerHTML = 'Got Offer letter of 9LPA'
 // }
}
setInterval(countDownHandler, 1000);