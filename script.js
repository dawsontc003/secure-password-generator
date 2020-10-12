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
 // Declaring array variable for generated password to pass to
var passarray = []

  // Functions for creating characters allowed by user in password
  function generateCapCase(){
    var passChar = caps [Math.floor (math.random() * caps.length)]
  };

  function generateLowCase(){
    var passChar = low [Math.floor (Math.random() * low.length)]
    console.log(generateLowCase)
     };

  function generateNumber(){
    var passChar = num [Math.floor (Math.random() * num.length)]
  };

  function generateSpecCase(){
    var passChar = spec [Math.floor (Math.random() * spec.length)]
  }


//Initiate genereate password user experience
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

  // Generate lower letter character for password
  if (lowerLetter) {
  passarray.push(generateLowCase)
  }
   // Generate capital letter character for password
  if (capLetter) {
    passarray.push(generateCapCase);
  }
   // Generate numeric character for password
  if (num) {
    passarray.push(generateNumber);
  }
    // Generate special character for password
  if (specChar) {
    passarray.push(generateSpecCase)
  }
    // forloop for generating a password with user input for character type and length
  for (var i = 0; i < passwordLength; i++) {
    var randomFunction = passarray[Math.floor(Math.random() * passarray.length)]
    console.log(randomFunction)
  }

}