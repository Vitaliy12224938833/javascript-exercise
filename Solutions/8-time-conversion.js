"use strict";

function timeConversion(s) {
  const minSec = s.slice(2, 8);
  const hours = parseInt(s);
  let dayHours = hours + 12;
  const defaultHours = s.slice(0, 2);
  const timeType = s.slice(8, 10);
  const dayTime = "PM";
  const nightTime = "AM";
  let militaryTime;
  if (timeType === nightTime) {
    if (hours === 12) {
      dayHours = "00";
      militaryTime = `${dayHours}${minSec}`;
    } else {
      dayHours = defaultHours;
      militaryTime = `${dayHours}${minSec}`;
    }
  } else if (timeType === dayTime) {
    if (hours === 12) {
      dayHours = "12";
      militaryTime = `${dayHours}${minSec}`;
    }
    militaryTime = `${dayHours}${minSec}`;
  }
  return militaryTime;
}
console.log(timeConversion("02:40:22AM"));
