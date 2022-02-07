//DATA
let scoreOne = 0
let scoreTwo = 0
let scoreOneElem = document.getElementById("score-one")
let scoreTwoElem = document.getElementById("score-two")

function increaseScoreOne() {
  scoreOne++
  draw()
}

function increaseScoreTwo() {
  scoreTwo++
  draw()
}

function draw() {
  scoreOneElem.innerText = scoreOne
  scoreTwoElem.innerText = scoreTwo
  winCheck()
}

function winCheck() {
  if (scoreOne >= 10) {
    document.getElementById("team1Score").classList.add("hidden")
    document.getElementById("team2Score").classList.add("hidden")
    document.getElementById("resetButton").classList.remove("hidden")
    console.log("Team1Win");
  }
  else if (scoreTwo >= 10) {
    document.getElementById("team1Score").classList.add("hidden")
    document.getElementById("team2Score").classList.add("hidden")
    document.getElementById("resetButton").classList.remove("hidden")
    console.log("Team2Win");
  }
}

function resetForm() {
  scoreOne = 0
  scoreTwo = 0
  document.getElementById("team1Score").classList.remove("hidden")
  document.getElementById("team2Score").classList.remove("hidden")
  document.getElementById("resetButton").classList.add("hidden")
  draw()
}