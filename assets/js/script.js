// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};


 //Characters that can be used when password is generated
 var char = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!@#$%^&*()_-+<>?~/",

  upAndLow: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  upAndNumber: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  upAndSpecial: "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+<>?~/",
  
  lowAndNumber: "abcdefghijklmnopqrstuvwxyz0123456789",
  lowAndSpecial: "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+<>?~/",
  
  numberAndSpecial: "0123456789!@#$%^&*()_-+<>?~/",
  
  upAndLowAndNumber: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  upAndLowAndSpecial: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+<>?~/",
  upAndNumberAndSpecial: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+<>?~/",
  
  lowAndNumberAndSpecial: "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+<>?~/",
  
  allChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!!@#$%^&*()_-+<>?~/",
};


//Chooses random character to use in password
function upperCase() { 
  return char.upperCase[Math.floor(Math.random() * char.upperCase.length)];
};
function lowerCase() {
  return char.lowerCase[Math.floor(Math.random() * char.lowerCase.length)];
};
function numberChoice() { 
  return char.number[Math.floor(Math.random() * char.number.length)];
};
function special() { 
  return char.special[Math.floor(Math.random() * char.special.length)];
};
function upAndLow() {
  return char.upAndLow[Math.floor(Math.random() * char.upAndLow.length)];
};
function upAndNumber() {
  return char.upAndNumber[Math.floor(Math.random() * char.upAndNumber.length)];
};
function upAndSpecial() {
  return char.upAndSpecial[Math.floor(Math.random() * char.upAndSpecial.length)];
};
function lowAndNumber() {
  return char.lowAndNumber[Math.floor(Math.random() * char.lowAndNumber.length)];
};
function lowAndSpecial() {
  return char.lowAndSpecial[Math.floor(Math.random() * char.lowAndSpecial.length)];
};
function numberAndSpecial() { 
  return char.numberAndSpecial[Math.floor(Math.random() * char.numberAndSpecial.length)];
};
function upAndLowAndNumber() {
  return char.upAndLowAndNumber[Math.floor(Math.random() * char.upAndLowAndNumber.length)];
};
function upAndLowAndSpecial() {
  return char.upAndLowAndSpecial[Math.floor(Math.random() * char.upAndLowAndSpecial.length)];
};
function upAndNumberAndSpecial() {
  return char.upAndNumberAndSpecial[Math.floor(Math.random() * char.upAndNumberAndSpecial.length)];
};
function lowAndNumberAndSpecial() {
  return char.lowAndNumberAndSpecial[Math.floor(Math.random() * char.lowAndNumberAndSpecial.length)];
};
function allChar() {
  return char.allChar[Math.floor(Math.random() * char.allChar.length)];
};

// Add event listener to generate button
generateBtn.addEventListener("click", function() {

  //Elements chosen by the user to use for their password
  var lengthChoice = prompt("Choose character length", "8-128");
  if (lengthChoice < 8) {
      prompt("Please choose a length of at least 8 but no longer than 128");
  } else if  (lengthChoice > 128) {
      prompt("Please choose a length of at least 8 but no longer than 128");
  } else (8 <= lengthChoice <= 128); {
    console.log(lengthChoice);
  };

  var upCase = confirm("Would you like to add upper case letters?");
    console.log(upCase);
  
  var lowCase = confirm("Would you like to add lower case letters?");
    console.log(lowCase);

  var number = confirm("Would you like to add numbers?");
  console.log(number);

  var specialChar = confirm("Would you like to add special characters?");
  console.log(specialChar); 


  var password = generatePassword(lengthChoice);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
  function generatePassword(num) {
    var password = '';
    for (var i = 0; i < num; i++)
    
    if (upCase === true && lowCase !== true && number !== true && specialChar !== true) {
      password += upperCase();

    } else if (upCase !== true && lowCase === true && number !== true && specialChar !== true) {
      password += lowerCase();

    } else if (upCase !== true && lowCase !== true && number === true && specialChar !== true) {
      password += numberChoice();

    } else if (upCase !== true && lowCase !== true && number !== true && specialChar === true) {
      password += special();

    } else if (upCase === true && lowCase === true && number !== true && specialChar !== true) {
      password += upAndLow();

    } else if (upCase === true && lowCase !== true && number === true && specialChar !== true) {
      password += upAndNumber();
    
    } else if (upCase === true && lowCase !== true && number !== true && specialChar === true) {
      password += upAndSpecial();

    } else if (upCase !== true && lowCase === true && number === true && specialChar !== true) {
      password += lowAndNumber();

    } else if (upCase !== true && lowCase === true && number !== true && specialChar === true) {
      password += lowAndSpecial();

    } else if (upCase !== true && lowCase !== true && number === true && specialChar === true) {
      password += numberAndSpecial();

    } else if (upCase === true && lowCase === true && number !== true && specialChar !== true) {
      password += upAndLowAndNumber();

    } else if (upCase === true && lowCase === true && number !== true && specialChar === true) {
      password += upAndLowAndSpecial();
      
    } else if (upCase === true && lowCase !== true && number === true && specialChar === true) {
      password += upAndNumberAndSpecial();
      
    } else if (upCase !== true && lowCase === true && number === true && specialChar === true) {
      password += lowAndNumberAndSpecial();
      
    } else if (upCase === true && lowCase === true && number === true && specialChar === true) {
      password += allChar();
      
    }

    return password;
  
  }});
