function getDayOfTheWeek() {
  const currentDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    " Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const currentDay = currentDays[today.getDay()];
  return currentDay;
}
window.onload = function () {
  const current = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  current.textContent = `The current day of the week is: ${getDayOfTheWeek()}`;
  const currentUTC = document.querySelector('[data-testid="currentUTCTime"]');
  currentUTC.textContent = `The current UTC time is: ${hours} : ${minutes} : ${seconds}`;
};

const UTCTime = new Date();
const hours = UTCTime.getUTCHours();
const minutes = UTCTime.getUTCMinutes();
const seconds = UTCTime.getUTCSeconds();

// window.onload = function () {};
