function randomNumber(){
  return Math.floor(Math.random() * 100) + 1;
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
  } else if (Number(guess) < 0 || Number(guess) > 100){
    message.innerHTML = "Please enter a number between 0 and 100";
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
  } else {
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


var answer = randomNumber();
