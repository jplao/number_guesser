function randomNumber(){
  return Math.floor(Math.random() * 100) + 1;
}

function submitGuess(){
  var guess = document.getElementById("guess").value;
  enableButton('clear');
  enableButton('reset');
  if (guess > answer) {
    var feedback = "That is too high";
  } else if (guess < answer){
    var feedback = "That is too low";
  } else {
    var feedback = "BOOM!";
  };
  document.getElementById("feedback").innerHTML = 'Your Last guess was' + guess + feedback;
}


function clearInput(){
  disableButton("clear");
  document.getElementById("guess").value = "";
}

function resetFeedback(){
  disableButton("reset")
  document.getElementById("feedback").innerHTML = "";
}

function disableButton(button){
  document.getElementById(button).disabled = true;
}

function enableButton(button){
  document.getElementById(button).disabled = false;
}

function resetGame(){
  clearInput();
  disableButton('clear');
  resetFeedback();
  disableButton('reset');
  answer = randomNumber();
}


var answer = randomNumber();
