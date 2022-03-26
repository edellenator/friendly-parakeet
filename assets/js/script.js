// Assignment code here
var textType = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numerical: "1234567890",
  specialCharacter: "!#$ %&'()*+,-./:;<=>?@[\]^_`{|}~",
}



// prompt to get characterLength
var lengthSelect = function () {
  var passLength = 0
  passLength = prompt ("How many characters should the password be? Choose between 8 and 128 characters");
  if (passLength < 8 || passLength > 128 || !passLength) {
    alert ("You must choose between 8 and 128 characters");
    return lengthSelect();
  }
  return passLength;
};



//concatenate character strings based on confirmations
var textSelection = function (text) {

  //Select if lower case string will be used
  var lowerSelect = confirm("Should the password contain lower case letters?");
  if (lowerSelect) {
    text += textType.lowerCase;
  };
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
  var passLength = lengthSelect ();
  console.log(passLength);
  var possibleText = textSelection ();
  console.log (possibleText);
  var randomText = "";
  var characterLength = possibleText.length;

  console.log (characterLength);

  for (var i = 0; i < passLength; i++) {
    randomText += possibleText.charAt(Math.floor(Math.random() * characterLength));
  };

    
  
  console.log (randomText)
  return randomText;
};


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



// function makeid(length) {
//   var result           = '';
//   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//     result += characters.charAt(Math.floor(Math.random() * 
// charactersLength));
//  }
//  return result;
// };

// console.log(makeid(5));