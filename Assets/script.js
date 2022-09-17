// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passLength = prompt("Enter desired amount of characters")
  var confirmLength = parseInt(passLength);
  console.log(confirmLength)

  if (passlength<8 || passLength >128 || isNaN(passLength)){
    alert ("Invalid length - Please try again");
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
