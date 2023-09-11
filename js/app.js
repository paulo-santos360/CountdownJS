const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
//console.log(items);

let futureDate = new Date(2023, 8, 11, 11, 30, 0);
console.log(futureDate)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
//console.log(months[month])
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
//const weekday = futureDate.getDay();
//console.log(weekday);

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`