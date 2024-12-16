"use strict";

//count current date
(function () {
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "ThursDay",
    "Friday",
    "Saturday",
  ];
  const Month = [
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
  const currentDay = weekDay[new Date().getDay()];
  const currentDate = new Date().getDate();
  const currentMonth = Month[new Date().getMonth()];
  const currentYear = 1900 + new Date().getYear();
  const dateString = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
  document.getElementById("date").innerHTML = dateString;
})();

// javaScript page loading animation
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const contentDiv = document.getElementById("contentDiv");
    contentDiv.classList.remove("scale-90", "opacity-0");
    contentDiv.classList.add("scale-100", "opacity-100");
  }, 500); // 500ms delay
});

function menucCollapse() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("-translate-y-full");
  // const menu2 = document.getElementById("menu2");
  // menu2.classList.toggle("-translate-y-full");
}
