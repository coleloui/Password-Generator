var capitalArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialArr = ["!", "#", "$", "%", "&", '"', "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


function generatePassword() {
  var userArr = [];



  var charLength = (function ask() {
    var n = prompt("Please pick a number from 8 to 128.");
    return isNaN(n) || +n > 100 || +n < 1 ? ask() : n;
  }());


  charSet();

  function charSet() {

    var capital = confirm("Would you like to use capital letters? OK for yes or Cancel for no.");
    var lower = confirm("Would you like to use lower case letters? OK for yes or Cancel for no.");
    var special = confirm("Would you like to use special characters? OK for yes or Cancel for no.")
    var number = confirm("Would you like to use numbers? OK for yes or Cancel for no.")

    if (capital === false && lower === false && special === false && number === false) {
      alert("You must select at least one.")
      charSet()
    }
    if (capital === true) {
      userArr.push(capitalArr)
    }
    if (lower === true) {
      userArr.push(lowerArr)
    }
    if (special === true) {
      userArr.push(specialArr)
    }
    if (number === true)
      userArr.push(numberArr);
  };

  var combArr = []

  for (var i = 0; userArr.length !== 0; i++) {
    var j = 0;
    while (j < userArr.length) {
      if (i >= userArr[j].length) {
        userArr.splice(j, 1);
      } else {
        combArr.push(userArr[j][i]);
        j += 1;
      }
    }
  }

  var randArr = [];

  for (var i = 0; i < charLength; i++) {
    var userPw = combArr[Math.floor(Math.random() * combArr.length)]
    randArr.push(userPw);
  };

  var pwString = randArr.toString().split(',').join("");


  return pwString;
}

// Assignment Code
// Assigns a variable to DOM of HTML element with id of generate for shorthand use
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Takes the function generatePassword and assigns it to local variable password
  var password = generatePassword();

  // Assigns a variable to DOM of HTML element with id of password for shorthand use
  var passwordText = document.querySelector("#password");

  // Assigns the value of local variable password to the HTML value 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);