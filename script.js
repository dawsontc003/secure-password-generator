// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passarray;
console.log(passarray)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Declairing variables for possible password characters.
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var low = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var spec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
 // Declaring array variable for generated password to pass to password text value
var passarray = []


//Initiate genereate password criteria for user selection
function generatePassword() {
  
  // Initial prompt for user to select password length
  var passwordLength = prompt("Enter desired character lenght between 8 - 128 character.")
  // console.log(passwordLength)

  // User entry validation for desired character length selection
if(passwordLength < 8 || passwordLength > 128) {
  alert("Minimum value 8 and maximum value 128")
return generatePassword()
}

  // Confirmation for character type selections from user
  var lowerLetter = confirm ("Include lower case letters?");
  // console.log(lowerLetter)
  var capLetter = confirm("Include Capital letters?")
  // console.log(capLetter);
  var num = confirm("Include numeric characters?")
  // console.log(num);
  var specChar = confirm("Include special characters?")
  // console.log(specChar);
  // Validation to require user to select at least one character option
  if(lowerLetter === false && capLetter === false && num === false && specChar === false){
    alert('Atleast one character type is required for password to generate.');
    return generatePassword()
  };

  for (i = 0; i < passwordLength; i++) {
  // Generate lower letter character for password and pass to array
  if (lowerLetter) {
     var passChar = low [Math.floor (Math.random() * low.length)]
     passarray.push(passChar);
  // passarray.push(generateLowCase)
  }
  
   // Generate capital letter character for password and pass to array
  if (capLetter) {
     var passChar = caps [Math.floor (Math.random() * caps.length)];
     passarray.push(passChar);
    }
   
    // Generate numeric character for password and pass to array
  if (num) {
    var passChar = number [Math.floor (Math.random() * number.length)]
    passarray.push(passChar);
    }
    
    // Generate special character for password and pass to array
  if (specChar) {
    var passChar = spec [Math.floor (Math.random() * spec.length)]
    passarray.push(passChar);
  }
  }
    


}