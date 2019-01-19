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
  const text = `Your last guess was`
  if (guess > answer) {
    return `${text}
      <h2> ${guess} </h2>
      That is too high`;
  } else if (guess < answer){
      return `${text}
        <h2> ${guess} </h2>
        That is too low`;
  } else if (guess == answer){
      winCondition();
      return `${text}
        <h2> ${guess} </h2>
        <h3> BOOM! </h3>
        You guessed correctly!
        Your new range is now ${min} to ${max} and another number has been generated.`
        ;
  };
}

function winCondition(){
  min -= 10;
  max += 10;
  document.getElementById("minimum").value = min;
  document.getElementById("maximum").value = max;
  answer = randomNumber();
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
  resetRange();
  answer = randomNumber();
}

function resetRange(){
  min = 0;
  max = 100;
  document.getElementById("minimum").value = min;
  document.getElementById("maximum").value = max;
}

var min = 0;
var max = 100;
var answer = randomNumber();
