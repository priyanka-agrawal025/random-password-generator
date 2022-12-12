var generateBtn = document.querySelector("#generate");

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
 
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
 
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function writePassword(event) {
  event.preventDefault();
  var passwordText = document.querySelector("#password");

  var passLength = prompt("Length of password", "Choose between 8-20 characters");
  while (passLength < 8 || passLength > 20) {
    alert("Password length must be between 8 and 20 characters");
    passLength = prompt("Length of password", "Choose between 8-20 characters");
  }

  var passUpper = confirm("Should password include UPPERCASE? Click OK for yes and CANCEL for no");
  var passLower = confirm("Should password include LOWERCASE? Click OK for yes and CANCEL for no");
  var passNumber = confirm("Should password include NUMERIC VALUES? Click OK for yes and CANCEL for no");
  var passSpecial = confirm("Should password include SPECIAL CHARACTERS? Click OK for yes and CANCEL for no");
  
  var password = "";

  for (i = 1; i <= passLength; i += 1){
    if (passUpper === true) {
      password += getRandomUpper();
      i++;
    } 
    if (passLower === true) {
      password += getRandomLower();
      i++;
    }
    if (passNumber === true) {
      password += getRandomNumber();
      i++;
    }
    if (passSpecial === true) {
      password += getRandomSymbol();
      i++;
    } 
  }
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
