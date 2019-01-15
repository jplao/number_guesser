function submitGuess(){
  var guess = document.getElementById("guess").value;
  if (guess > answer) {
    var feedback = "That is too high";
  } else if (guess < answer){
    var feedback = "That is too low";
  } else {
    var feedback = "BOOM!";
  };
  document.getElementById("feedback").innerHTML = 'Your Last guess was' + guess + feedback;
}

function randomNumber(){
  return Math.floor(Math.random() * 100) + 1;
}

function clearInput(){
  document.getElementById("guess").value = "";
}

function resetFeedback(){
  document.getElementById("feedback").innerHTML = "";
}

function resetGame(){
  clearInput();
  resetFeedback();
  answer = randomNumber();
}


var answer = randomNumber();
