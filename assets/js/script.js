// Assignment code here
//Declare variables in global memory.
var lowercaseOpt = "abcdefghijklmnopqrstuvwxyz";
var uppercaseOpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberOpt = "1234567890";
var specialcharOpt = "!@#$%^&*";
var selectedCharacters = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Ask user for the desired password length and which characters they'd like to include.
//Store these answers for later use.
function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like your password to be?"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters.");
    generatePassword();
  }

  var lowercaseYes = confirm(
    "Click OK to confirm the use of lowercase letters or Cancel to exclude lowercase letters."
  );
  var uppercaseYes = confirm(
    "Click OK to confirm the use of uppercase letters or Cancel to exclude uppercase letters."
  );
  var numbersYes = confirm(
    "Click OK to confirm the use of numbers or Cancel to exclude numbers."
  );
  var specialcharYes = confirm(
    "Click OK to confirm the use of special characters or Cancel to exclude special characters."
  );
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
