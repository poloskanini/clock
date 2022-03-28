// DIGITS variables
const digitalHour = document.querySelector('.digital')

// Clock variables
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Clock
const setDate = () => {

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform=`rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform=`rotate(${hoursDegrees}deg)`;
}


// Digits
const showDate= () => {
  let date = new Date()
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  if( h < 10 ){ h = '0' + h; }
  if( m < 10 ){ m = '0' + m; }
  if( s < 10 ){ s = '0' + s; }
  let time = h + ':' + m + ':' + s
  document.querySelector('.digits').innerHTML = time;
}

setInterval(showDate, setDate, 1000)
setInterval(setDate, 1000)