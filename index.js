let homeScore = 0;
let guestScore = 0;
let timeLeft = 10 * 60;
let countdown = null;

const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start-btn");

function showTime() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timerElement.classList.toggle("low-time", timeLeft <= 60);
  timerElement.innerHTML =
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;
}

function addPoints(team, points) {
  if (team === "home") {
    homeScore = Math.max(0, homeScore + points);
    document.getElementById("home-score").innerText = homeScore;
  } else {
    guestScore = Math.max(0, guestScore + points);
    document.getElementById("guest-score").innerText = guestScore;
  }
  highLight()
}
function resetScore() {
  homeScore = 0;
  guestScore = 0;
  timeLeft = 10 * 60;

  if (countdown !== null) {
    clearInterval(countdown);
    countdown = null;
  }
  startButton.innerText = "START";

  document.getElementById("home-score").innerText = 0;
  document.getElementById("guest-score").innerText = 0;
  showTime();
  highLight();

}
function highLight(){
  let home = document.getElementById("home-score");
  let guest = document.getElementById("guest-score");

  home.classList.remove("leading");
  guest.classList.remove("leading");

  if(homeScore>guestScore){
    home.style.color = "lime";
    guest.style.color = "red";
    home.classList.add("leading");
  }
  else if (guestScore>homeScore) {
    home.style.color ="red"
    guest.style.color = "lime"
    guest.classList.add("leading");
  }
  else {
    home.style.color ="red"
    guest.style.color = "red"
  }

}

function startGame(){
  if (countdown !== null) {
    clearInterval(countdown);
    countdown = null;
    startButton.innerText = "START";
    return;
  }

  startButton.innerText = "PAUSE";

  countdown = setInterval(() => {
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countdown);
      countdown = null;
      startButton.innerText = "START";
      timerElement.classList.add("low-time");
      timerElement.innerHTML = "Time Up!";
      return;
    }

    showTime();
  }, 1000);
}
