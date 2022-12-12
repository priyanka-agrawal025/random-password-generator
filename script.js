// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var passwordText = document.querySelector("#password");

  var passLength = prompt("Length of password", "Choose between 8-20 characters");
  if (passLength < 8 || passLength > 20) {
    alert("Password length must be between 8 and 20 characters")
  }
  var passUpper = confirm("Should password include UPPERCASE? Click OK for yes and CANCEL for no");
  var passLower = confirm("Should password include LOWERCASE? Click OK for yes and CANCEL for no");
  var passNumber = confirm("Should password include NUMERIC VALUES? Click OK for yes and CANCEL for no");
  var passSpecial = confirm("Should password include SPECIAL CHARACTERS? Click OK for yes and CANCEL for no");
  //prompt("Special characters to be included", "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
