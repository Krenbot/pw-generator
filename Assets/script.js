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

var inputs = []
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowercases = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numbers = "0123456789" .split("");
var specials = "*&^%$#@!?><{}" .split("")

var lowercaseConfirm = confirm ("Include lowercase?");
  if (lowercaseConfirm === true) {
    for (var i=0; i<lowercases.length; i++){
      inputs.push(lowercases[i]);
    }
  }



  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
