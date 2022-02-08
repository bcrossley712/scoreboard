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
    gameOver1()
  }
  else if (scoreTwo >= 10) {
    document.getElementById("team1Score").classList.add("hidden")
    document.getElementById("team2Score").classList.add("hidden")
    document.getElementById("resetButton").classList.remove("hidden")
    gameOver2()
  }
}

function resetForm() {
  scoreOne = 0
  scoreTwo = 0
  document.getElementById("team1Score").classList.remove("hidden")
  document.getElementById("team2Score").classList.remove("hidden")
  document.getElementById("resetButton").classList.add("hidden")
  document.getElementById("image").innerHTML = "<img class='img-fluid' src='https://getwallpapers.com/wallpaper/full/f/8/6/629819.jpg' alt='Naruto image'>"
  draw()
}

function gameOver1() {
  document.getElementById("image").innerHTML = "<img class='img-fluid' src='https://wallpapercave.com/wp/wp3914161.jpg' alt='Naruto image'>"
}

function gameOver2() {
  document.getElementById("image").innerHTML = "<img class='img-fluid' src='https://wallpapercave.com/wp/wp5955198.jpg' alt='Naruto image'>"
}