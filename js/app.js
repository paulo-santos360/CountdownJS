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

let futureDate = new Date(2023, 8, 24, 11, 30, 0);//(2023, 8, 24, 11, 30, 0)
//console.log(futureDate)

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

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time is
const futureTime = futureDate.getTime();
//console.log(futureTime);

function getRemainingTime(){
 
    const today = new Date().getTime();
    //console.log(today)

    const t = futureTime - today;
    //console.log(t)

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    //console.log(oneDay) oneHours oneMinute
    const oneHours = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = t / oneDay;
     //console.log(days);
    days = Math.floor(days)
    //let hours = t / oneHours

    let hours = Math.floor((t % oneDay) / oneHours);
    let minutes = Math.floor((t % oneHours) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    //console.log(hours);
    
    // set values array;
    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
    }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();