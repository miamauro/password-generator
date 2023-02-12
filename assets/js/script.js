// Assignment code here
//Declare variables in global memory.
var lowercaseOpt = "abcdefghijklmnopqrstuvwxyz";
var uppercaseOpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberOpt = "1234567890";
var specialcharOpt = "!@#$%^&*?<>~()-_=+";
var selectedCharacters = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Ask user for the desired password length and which characters they'd like to include.
// Store these answers for later use.
function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like your password to be?"
  );
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === null) {
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

  if (!lowercaseYes && !uppercaseYes && !numbersYes && !specialcharYes) {
    alert("Your password must contain at least one character type.");
  }
  // Add chosen character types to variable called selectedCharacters.
  if (lowercaseYes) {
    selectedCharacters.concat(lowercaseOpt);
  }
  if (uppercaseYes) {
    selectedCharacters.concat(uppercaseOpt);
  }
  if (numbersYes) {
    selectedCharacters.concat(numberOpt);
  }
  if (specialcharYes) {
    selectedCharacters.concat(specialcharOpt);
  }

  for (let i = 0; i < passwordLength; i++) {
    var password = "";
    var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    var randomCharIndex = Math.floor(Math.random() * randomIndex.length);
    var randomChar = randomIndex.charAt(randomCharIndex);
    password = password + randomChar;
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
