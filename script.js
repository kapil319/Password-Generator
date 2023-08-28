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
var lowercaseCharacters = [
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
var uppercaseCharacters = [
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
    alert(`Click OK to proceed`)
  }
//variable for password characters//
  let lowercaseCharacters = confirm("Password to include Lowercase characters? Click OK to confirm.") 
  let uppercaseCharacters = confirm("Password to include Uppercase characters? Click OK to confirm.")
  let numericCharacters =  confirm("Password to include Numeric characters? Click OK to confirm.")
  let specialCharacters = confirm("Password to include Special characters? e.g. $@%&*!. Click OK to confirm.");

      
  if(lowercaseCharacters === false && uppercaseCharacters ===false && numericCharacters ===false && specialCharacters === false) {
    alert(`Select atleast one character type`);
    return;
  }

//variable for password options //
  let passwordOptions = {
    length: length,
    lowercaseCharacters: lowercaseCharacters,
    uppercaseCharacters: uppercaseCharacters,
    numericCharacters: numericCharacters,
    specialCharacters: specialCharacters,
  }

  return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  let randomElement = array[randomIndex];
  
  return randomElement;
  
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();

  let result = []

  let randomCharacter = []

  let requiredCharacter = []

  if(options.lowercaseCharacters) {
    randomCharacter = randomCharacter.concat(lowercaseCharacters);
    requiredCharacter.push(getRandom(lowercaseCharacters))

  }

  if(options.uppercaseCharacters) {
    randomCharacter = randomCharacter.concat(uppercaseCharacters);
    requiredCharacter.push(getRandom(uppercaseCharacters))

  }

  if(options.numericCharacters) {
    randomCharacter = randomCharacter.concat(numericCharacters);
    requiredCharacter.push(getRandom(numericCharacters))

  }

  if(options.specialCharacters) {
    randomCharacter = randomCharacter.concat(specialCharacters);
    requiredCharacter.push(getRandom(specialCharacters))

  }

  for(let index = 0; index < options.length; index++){ 
  var passwordGenerated = getRandom(randomCharacter);
  result.push(passwordGenerated); 
 
}
  return result.join("")

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