// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring character variables in global memory for password generator




// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// User defined password requirements with loop for correct character length requirement
function generatePassword() {
  var passwordLength = prompt("Enter desired character lenght between 8 - 128 character.")
  console.log(passwordLength)
if(passwordLength < 8 || passwordLength > 128) {
  alert("Minimum value 8 and maximum value 128.")
// var passwordLength = prompt("Enter desired character lenght between 8 - 128 character.")
return generatePassword()
}

// Declairing variables for possible password characters.
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var low = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var speciall = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
 

// for (i = 0; i < speciall.length; i++){
//   console.log(speciall[i])
// } 

  var lowerLetter = confirm ("Include lower case letters?");
  console.log(lowerLetter)
  var capLetter = confirm("Include Capital letters?")
  console.log(capLetter);
  var num = confirm("Include numeric characters?")
  var specChar = confirm("Include special characters?")
  console.log(specChar);

  if(lowerLetter === false && capLetter === false && num === false && specChar === false){
    alert('One character type is required for password to generate.');
    return generatePassword()
  }
};

//  if(num) {
//     console.log(Math.random());
//     Math.round()
//   }
//   console.log(num);

// var ran = Math.random(); 
// Math.floor(ran)
// console.log(ran)




// Math.random();

// lowercase characters boolean
// var lowerLetter = confirm ("Include lower case letters?");
// var capLetter = confirm("Include Capital letters?")


