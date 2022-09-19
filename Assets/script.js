// Assignment Code (Given)
var generateBtn = document.querySelector("#generate");

//Input Variables
var inputs = []
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercases = "abcdefghiklmnopqrsttuvwxtz" 
var numbers = "0123456789"
var specials = "*&^%$#@!?><{}" 
var randPassword = ""

//Used for "Generate Password" button (Given)
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input (Given)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

//Full PW Generation Function begin
function generatePassword()
{

  //Function to request total length
  var passLength = prompt("Enter desired amount of characters")
  var confirmLength = parseInt(passLength);

  //Checks for valid password length
  if (passLength < 8 || passLength > 128 || isNaN(passLength))
  {
    alert ("Invalid entry - Please try again");
  }

//Prompts user choice for lowercase/uppercase/numbers/specials...
var lowercaseConfirm = confirm ("Include lowercase letters?");
  if (lowercaseConfirm === true) {
    for (var i=0; i<lowercases.length; i++){
      inputs.push(lowercases[i]);
    }
    console.log(inputs)
  }

  var uppercaseConfirm = confirm ("Include uppercase letters?");
  if (uppercaseConfirm === true) {
    for (var i=0; i<uppercases.length; i++){
      inputs.push(uppercases[i]);
    }
    console.log(inputs)
  }

  var numberConfirm = confirm ("Include numbers?");
  if (numberConfirm === true) {
    for (var i=0; i<numbers.length; i++){
      inputs.push(numbers[i]);
    }
    console.log(inputs)
  }

  var specialsConfirm = confirm ("Include special characters?");
  if (specialsConfirm === true) {
    for (var i=0; i<specials.length; i++){
      inputs.push(specials[i]);
    }
    console.log(inputs)
  }

//compiles input choices into an array, returning random values through Math input by the length of the input array, returning password to the box
for (var i = 0; i < confirmLength; i++){
    inputs[
        Math.floor(Math.random() * inputs.length)];
    
        randPassword += inputs[
           Math.floor(Math.random() * inputs.length)];
   }
   return randPassword;
}