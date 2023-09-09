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
  current.textContent = getDayOfTheWeek();
  let utcTime = document.querySelector('[data-testid="currentUTCTime"]');
  var currentUTCTimeISOString = new Date().toISOString();
  utcTime.textContent = currentUTCTimeISOString();
};



