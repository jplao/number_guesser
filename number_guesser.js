// function called whenever a new answer needs to be set
function randomNumber(){
  /* subtracts the minimum number from the maximum then multiplies it to set a range to choose a random integer(rounded down).
  Then adds that number to the minimum number so that it returns a number in the range between the set minimum and maximum.*/
  return Math.floor(Math.random() * (max - min)) + min;
}

//function called when Set Range button is clicked
function setRange(){
  // takes the value in the 'minimum' input field and sets it to the minimum variable.
  min = parseInt(document.getElementById("minimum").value);
  // takes the value in the 'maximum' input field and sets it to the maximum variable.
  max = parseInt(document.getElementById("maximum").value);
  // calls for a new number to be set to the variable answer using the new minimum and maximum.
  answer = randomNumber();
}

// function called when Submit Guess button is clicked
function submitGuess(){
  // takes the value in the 'guess' input field and sets it to the guess variable that is needed outside the function.
  var guess = document.getElementById("guess").value;
  // enables the 'clear' button
  enableButton('clear');
  // enables the 'reset' button
  enableButton('reset');
  // sends the guess variable into the helper function to check validity.
  validGuess(guess);
}

// function called to check if a guess input is valid
function validGuess(guess){
  // grabs the p element and sets it to a variable
  message = document.getElementById("feedback")
  // checks if guess sent through is NotANumber
  if (isNaN(guess)){
    // if guess is not a number (true).  The text is put inside the p element.
    message.innerHTML = "Please enter a number";
    // checks if the guess changed from a string into an integer(or number) is lower than the minimum OR higher than the maximum.
  } else if (Number(guess) < min || Number(guess) > max){
    // if guess either lower than min or higher than max, then text is put inside of the p element teling the user to choose a number within the min and max range.
    message.innerHTML = `Please enter a number between ${min} and ${max}`;
    // if guess is valid number that is not outside of the set range it his this statement
  } else {
    // sets the variable feedback to the whatever is returned from the helper method getFeedback and sends in the guess into that function
    var feedback = getFeedback(guess);
    // takes the return value and puts it into the p element.
    message.innerHTML = feedback;
  };
}

// function called when a guess is a valid number within the set range
function getFeedback(guess){
  // sets the constant text (that doesn't ever change)
  const text = `Your last guess was`
  // checks to if guess is greater than the answer
  if (guess > answer) {
    // if true returns concatinated string with the text constant, the guess as a h2 (for styling), and too high message.
    return `${text}
      <h2> ${guess} </h2>
      That is too high`;
    // checks if the guess is lower than the answer
  } else if (guess < answer){
    // if true returns concatinated string with the text constant, the guess as a h2 (for styling), and too low message.
      return `${text}
        <h2> ${guess} </h2>
        That is too low`;
    // checks id the guess is equal to the answer
  } else if (guess == answer){
      // if true, calls the function winCondition to change the range
      winCondition();
      /* returns concatinated string with the text constant, the guess as a h2 (for styling),
      and the win message letting the user know the range has changed and a new number to guess is generated.*/
      return `${text}
        <h2> ${guess} </h2>
        <h3> BOOM! </h3>
        You guessed correctly!
        Your new range is now ${min} to ${max} and another number has been generated.`
        ;
  };
}

// function called if the answer is guessed correctly
function winCondition(){
  // sets min to 10 less than it was
  min -= 10;
  // sets max to 10 more than it was
  max += 10;
  // puts the new min into the minimum input field
  document.getElementById("minimum").value = min;
  // puts the new maximum into the maximum input field
  document.getElementById("maximum").value = max;
  // sets answer to a new number within the new min and max range
  answer = randomNumber();
}

// function called when pressing the Clear Input button and when resetting
function clearInput(){
  // calls helper function to change the state of the clear button to disabled so it can't be clicked
  disableButton("clear");
  // fills the guess input with an empty string
  document.getElementById("guess").value = "";
}

// helper function called during resetting
function resetFeedback(){
  // calls helper function to change the state of the reset button to disabled to it can't be clicked
  disableButton("reset")
  // fills the feedpack (p) element with an empty string so that there is no text
  document.getElementById("feedback").innerHTML = "";
}

// helper function that takes in a button to disable
function disableButton(button){
  // sets the state of the given button to disabled so that it can not be clicked
  document.getElementById(button).disabled = true;
}

// helper function that takes in a button to enable
function enableButton(button){
  // sets the state of the button to enabled so that it can be clicked
  document.getElementById(button).disabled = false;
}

// function called when the Reset Game button is clicked
function resetGame(){
  // calls helper function to clear guess input and diable clear button
  clearInput();
  // calls helper function to clear feedback and disable reset button
  resetFeedback();
  // calls helper function to change range back to preset values
  resetRange();
  // sets answer to a new number within the newly reset range
  answer = randomNumber();
}

// helper function to change range back to preset values
function resetRange(){
  // sets min variable to 0
  min = 0;
  // sets max variable to 100
  max = 100;
  // enters 0 into the minimum input field
  document.getElementById("minimum").value = min;
  // enters 100 into the maximum input field
  document.getElementById("maximum").value = max;
}

// sets the var(because it can change if range is set and it needs to be accessed by other functions) min to 0
var min = 0;
// sets the var(because it can change if range is set and it needs to be accessed by other functions) min to 100
var max = 100;
// sets the var(because it can change if new range is set and it needs to be accessed by other functions) answer to a random number within the range
var answer = randomNumber();
