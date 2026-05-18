let homeScore = 0;
let guestScore = 0;

function addPoints(team, points) {
  if (team === "home") {
    homeScore += points;
    document.getElementById("home-score").innerText = homeScore;
  } else {
    guestScore += points;
    document.getElementById("guest-score").innerText = guestScore;
  }
  highLight()
}
function resetScore() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("home-score").innerText = 0;
  document.getElementById("guest-score").innerText = 0;

}
function highLight(){
  let home = document.getElementById("home-score");
  let guest = document.getElementById("guest-score");

  if(homeScore>guestScore){
    home.style.color = "lime";
    guest.style.color = "red";
  }
  else if (guestScore>homeScore) {
    home.style.color ="red"
    guest.style.color = "lime"
  }
  else {
    home.style.color ="red"
    guest.style.color = "red"
  }

}