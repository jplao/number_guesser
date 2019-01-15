function submitGuess(){
  var guess=document.getElementById("guess").value;
  document.getElementById("user_guess").interHTML= guess;
  if (guess > answer) {
    document.getElementById("feedback").interHTML= "That is too high";
  }
  else if (guess < answer){
    document.getElementById("feedback").interHTML= "That is too low";
  }
  else if (guess == answer)
    document.getElementById("feedback").interHTML= "BOOM!";
}


var answer = Math.floor(Math.random() * 100) + 1;
