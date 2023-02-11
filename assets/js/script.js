// Assignment code here
var lowercaseOpt = "abcdefghijklmnopqrstuvwxyz";
var uppercaseOpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberOpt = "1234567890";
var specialcharOpt = "!@#$%^&*";
var selectedCharacters = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
