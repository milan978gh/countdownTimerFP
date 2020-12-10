const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const newYear = '01 jan 2021';

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const secondsTotal = (newYearDate - currentDate) / 1000;
  const days = Math.floor(secondsTotal / 3600 / 24);
  const hours = Math.floor(secondsTotal / 3600) % 24;
  const mins = Math.floor(secondsTotal / 60) % 60;
  const seconds = Math.floor(secondsTotal % 60);
  daysEl.textContent = days;
  hoursEl.textContent = formatTime(hours);
  minsEl.textContent = formatTime(mins);
  secondsEl.textContent = formatTime(seconds);
}
setInterval(countdown, 1000);
// initial call
countdown();

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
