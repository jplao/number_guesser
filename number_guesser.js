function submitGuess(){
  var guess = document.getElementById("guess").value;
  if (guess > answer) {
    document.getElementById("feedback").interHTML= "That is too high";
  } else if (guess < answer){
    document.getElementById("feedback").interHTML= "That is too low";
  } else (guess == answer){
    document.getElementById("feedback").interHTML= "BOOM!";
  }
}

function randomNumber(){
  Math.floor(Math.random() * 100) + 1;
}

var answer = randomNumber();
