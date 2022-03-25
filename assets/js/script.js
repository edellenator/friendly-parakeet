// Assignment code here
var textType = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numerical: "1234567890",
  specialCharacter: "!#$ %&'()*+,-./:;<=>?@[\]^_`{|}~",
}



// prompt to get characterLength
var passwordLength = function () {
  var length = 8;
  length = prompt ("How many characters should the password be? Choose between 8 and 128 characters");
  console.log(length);
};

var textLength = parseInt(passwordLength());

//concatenate character strings based on confirmations
function textSelection(text) {

  //Select if lower case string will be used
  var lowerSelect = confirm("Should the password contain lower case letters?");
  if (lowerSelect) {
    text += textType.lowerCase;
  };
  console.log(lowerSelect);
  console.log(text);

  //Select if upper case string will be used
  var upperSelect = confirm("Should the password contain lower case letters?");
  if (upperSelect) {
    text += textType.upperCase;
  };
  console.log(text);

  //select if numbers will be used 
  var numSelect = confirm("Should the password contain numbers?");
  if (numSelect) {
    text += textType.numerical;
  };
  console.log(text);

  //select if special characters will be used
  var specialSelect = confirm("Should the password contain special characters?");
  if (specialSelect) {
    text += textType.specialCharacter;
  };
  console.log(text);

  if (!specialSelect && !numSelect && !upperSelect && !lowerSelect) {
    alert("You must select at least one character type")
    return textSelection();
  }



  return text;
}



var generatePassword = function () {
  var randomText = "";
  var possibleText = textSelection();

  console.log(possibleText);

  for (var i = 0; 1 < textLength; i++) {
    randomText += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
  };

    console.log(randomText);
  return randomText;

};

generatePassword();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function makeid() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < 5; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }

//   return text;
// }

// console.log(makeid());
// " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"