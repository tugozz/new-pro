const hourSs = document.getElementById("hour");
const minuteSs = document.getElementById("minute");
const secondSs = document.getElementById("second");
const amPm = document.getElementById("time");

const time = () => {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let amPmText = hour >= 12 ? "PM" : "AM";

  hourSs.innerText = hour;
  minuteSs.innerText = minute;
  secondSs.innerText = second;
  amPm.innerText = amPmText;
};

let timeRr = setInterval(time, 1000);

time();
