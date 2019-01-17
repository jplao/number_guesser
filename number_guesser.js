function randomNumber(){
  return Math.floor(Math.random() * (max - min)) + min;
}

function setRange(){
  min = parseInt(document.getElementById("minimum").value);
  max = parseInt(document.getElementById("maximum").value);
  answer = randomNumber();
}

function submitGuess(){
  var guess = document.getElementById("guess").value;
  enableButton('clear');
  enableButton('reset');
  validGuess(guess);
}

function validGuess(guess){
  message = document.getElementById("feedback")
  if (isNaN(guess)){
    message.innerHTML = "Please enter a number";
  } else if (Number(guess) < min || Number(guess) > max){
    message.innerHTML = `Please enter a number between ${min} and ${max}`;
  } else {
    var feedback = getFeedback(guess);
    message.innerHTML = feedback;
  };
}

function getFeedback(guess){
  text = `Your last guess was`
  if (guess > answer) {
    return `${text}
      <h1> ${guess} </h1>
      That is too high`;
  } else if (guess < answer){
      return `${text}
        <h1> ${guess} </h1>
        That is too low`;
  } else if (guess == answer){
      return `${text}
        <h1> ${guess} </h1>
        <h2> BOOM! </h2>`;
  };
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
  resetFeedback();
  answer = randomNumber();
}

var min = 1;
var max = 100;
var answer = randomNumber();
