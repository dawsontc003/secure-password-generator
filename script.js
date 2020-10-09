// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = 8
// User defined password requirements
function generatePassword() {
  var passwordLength = prompt("Enter desired character lenght between 8 - 128 character.")
  if (passwordLength < 8 || passwordLength > 128) {
  alert("Minimum value 8 and maximum value 128.");
}
  var lowerLetter = confirm ("Include lower case letters?");
  var capLetter = confirm("Include Capital letters?")
  var num = confirm("Include numeric characters?")
  var specChar = confirm("Include special characters?")
};
// Password requirement validation
// if (passwordLength < 8 || passwordLength > 128) {
//   alert("Minimum value 8 and maximum value 128.");
// }

// lowercase characters boolean
// var lowerLetter = confirm ("Include lower case letters?");
// var capLetter = confirm("Include Capital letters?")


