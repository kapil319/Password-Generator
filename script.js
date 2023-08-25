// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //variable for password length //
  let length = parseInt (
      prompt("Enter Password length between 10 characters and 64")
      )
      
  if(isNaN(length) === true) { 
      alert(`Password must contain one lowercase, one uppercase, one number and one special character e.g. $@%&*!`);
      return;
    }

  if(length < 10) {
    alert(`Password length must be atleast 10 characters`)
    return;
  }

  if(length >= 65) {
    alert(`Password length must be a maximum of 64 charcters`)
    return;
  }

  if(length >= 10 <=64) {
    let lowercaseCharacter = confirm("Password to include Lowercase characters? Click OK to confirm.") 

    alert(`Click OK to proceed`)
    confirm("Password to include Lowercase characters? Click OK to confirm.")
    confirm("Password to include Uppercase characters? Click OK to confirm.")
    confirm("Password to include Numeric characters? Click OK to confirm.")
    confirm("Password to include Special characters? e.g. $@%&*!. Click OK to confirm.");
      if(lowercaseCharacter === false && )
    
  } 
    else( )




  

  // if - character type lowercase - click ok to confirm
  // if - character type uppercase - click ok to confirm
  // if - character type numeric  - click ok to confirm
  // if - character special numericCharacter - click ok to confirm

}

// Function for ge tting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * Array.length)
  let randomElement = array[randomIndex];
  
  return randomElement;
  
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);