// Assignment Code
var generateBtn = document.querySelector("#generate");
var inputs = []
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowercases = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numbers = "0123456789" .split("");
var specials = "*&^%$#@!?><{}" .split("")

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

  if (passLength<8 || passLength >128 || isNaN(passLength)){
    alert ("Invalid length - Please try again");
    return;
  }

var lowercaseConfirm = confirm ("Include lowercase letters?");
  if (lowercaseConfirm === true) {
    for (var i=0; i<lowercases.length; i++){
      inputs.push(lowercases[i]);
    }
  }

  var uppercaseConfirm = confirm ("Include uppercase letters?");
  if (uppercaseConfirm === true) {
    for (var i=0; i<uppercases.length; i++){
      inputs.push(uppercases[i]);
    }
  }

  var numberConfirm = confirm ("Include numbers?");
  if (numberConfirm === true) {
    for (var i=0; i<numbers.length; i++){
      inputs.push(numbers[i]);
    }
  }

  var specialsConfirm = confirm ("Include special characters?");
  if (specialsConfirm === true) {
    for (var i=0; i<specials.length; i++){
      inputs.push(specials[i]);
    }
  }

var randPassword = "";

for (var i = 0; i < confirmLength; i++) {
    inputs[
        Math.floor(Math.random() * inputs.length)];
    randPassword +=
       inputs[
           Math.floor(Math.random() * inputs.length)
       ];
   }

   return randPassword;
  }
   // Add event listener to generate button
   
generateBtn.addEventListener("click", writePassword);
