// Roulette Animation
const roulette = document.querySelector("#roulette");
const rouletteBox = document.querySelector(".roulette-box");
const rouletteTitle = document.querySelector(".spin-title");
const spinBtn = document.querySelector(".spin-the-wheel");
const spinRoll = document.querySelector(".roulette-spin");
const spinnArrow = document.querySelector("#spinner-arrow");
const winText = document.querySelector(".gift-open");

spinBtn.addEventListener("click", function() {
  spinRoll.classList.add('spinning');
});

spinRoll.addEventListener("animationend", function() {
  rouletteTitle.classList.add('hidden');
  rouletteBox.classList.add('hidden');
  spinBtn.classList.add('hidden');
  spinnArrow.classList.add('pulse');
  winText.classList.add('visible');
  startTimer();
});

// Timer Countdown
var timerSpan = document.getElementById('timer');
timerSpan.innerHTML = 02 + ":" + 00;

function startTimer() {
  var presentTime = timerSpan.innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if (s==59) {
    m=m-1
  }
  if (m<0) {
    roulette.classList.add('hidden');
    return
  }

  timerSpan.innerHTML = m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}