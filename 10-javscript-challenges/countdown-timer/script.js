const newYear = "1 Jan 2024";
const newYearDate = new Date(newYear);

let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minsEl = document.getElementById("mins");
let secondsEl = document.getElementById("seconds");

const converterBtn = document.getElementById("converter");
const times2 = document.querySelector("#times2");
const times1 = document.querySelector("#times1");
let daysEl2 = document.getElementById("days2");
let monthEl = document.getElementById("months");

function countDown() {
   let now = new Date();
   let totalseconds = Math.floor(newYearDate - now) / 1000;
   let days = Math.floor(totalseconds / 3600 / 24);
   let hours = Math.floor(totalseconds / 3600) % 24;
   let minutes = Math.floor(totalseconds / 60) % 60;
   let seconds = Math.floor(totalseconds % 60);

   daysEl.textContent = days;
   hoursEl.textContent = format(hours);
   minsEl.textContent = format(minutes);
   secondsEl.textContent = format(seconds);

   // for times2 list:
   monthEl.textContent = format(Math.floor(days / 30));
   daysEl2.textContent = format(Math.floor(days % 30));
}

let format = (num) => (num > 9 ? num : `0${num}`);

// countDown(newYearDate);
// setInterval(countDown(newYearDate), 2000); // don't work if d func has param

countDown(); // initial call
setInterval(countDown, 1000);

converterBtn.addEventListener("click", () => {
   if (converterBtn.innerHTML === "To Months &amp; Days") {
      converterBtn.innerHTML = "To Exact";
      times2.classList.remove("hidden");
      times1.classList.add("hidden");
   } else {
      converterBtn.innerHTML = "To Months &amp; Days";
      times1.classList.remove("hidden");
      times2.classList.add("hidden");
   }
});
