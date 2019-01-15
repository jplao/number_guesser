function submitGuess(){
  var guess = document.getElementById("guess").value;
  if (guess > answer) {
    var feedback = "That is too high";
  } else if (guess < answer){
    var feedback = "That is too low";
  } else {
    var feedback = "BOOM!";
  };
  document.getElementById("feedback").interHTML= feedback;
}

function randomNumber(){
  Math.floor(Math.random() * 100) + 1;
}

var answer = randomNumber();
