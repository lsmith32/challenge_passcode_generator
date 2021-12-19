var specialCharacters;
var lowerCase;
var upperCase;
var numericCharacters;
var characterAmount;
var choices;

//IDK it came with the base code:
character = ["!","#","$","%","&","'","(", ")","*","+",",","-",".","/",":",";","<","?","@","[","^","]","_","`","{","}","|","~"];
numeric = ["1","2","3","4","5","6","7","8","9","0"];
upper = ["Q","W","E","R","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
lower =["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    generateBtn.addEventListener("click", writePassword);
    var characterAmount = window.prompt("How many characters long would you like your passcode to be? (Between 8 and 128)");
  if (characterAmount < "8" || characterAmount > "128") {
    window.prompt("Please enter a number between 8 and 128.");

  } else if (!enter) {
    alert("You need to enter a value");

  } else {
    specialCharacters = confirm("Would you like special characters?");
    lowerCase = confirm("Would you like lowercase letters?");
    upperCase = confirm("Would you like uppercase letters?");
    numericCharacters = confirm("Would you like numbers?");
  };
//no options choosen
if (!specialCharacters && lowerCase && upperCase && numericCharacters) {
  choices = alert("You must choose a criteria.");

}
//all options choosen
else if (specialCharacters &&  numericCharacters && upperCase && lowerCase) {
  choices = specialCharacter.concat(numeric, lower, upper)};
};
//3 options choosen