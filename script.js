// Assignment Code
var generateBtn = document.querySelector("#generate");
// ties generateBtn to the button in the HTML doc


// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
    
}
// need to make the generatePassword function!!!!!!!!!
// if this is running as intended, with each confirm it's adding that particular string to the var passChar, which i will eventually split every 
// individual character into and pick with the math.random function 
function generatePassword() {
    var passChar = [""]
    var passLength = 8
    if (confirm("Lowercase? ")) {
        passChar.push("abcdefghijklmnopqrstuvwxyz")
    } else {
        console.log("no")
    }
    if (confirm("Uppercase? ")) {
        passChar.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    } else {
        console.log("no")
    }
    if (confirm("Numbers? ")) {
        passChar.push("1234567890")
    } else {
        console.log("no")
    }
    if (confirm("Specials? ")) {
        passChar.push("!@#$%^&*?") 
    } else {
        console.log("no ");
    } 
};

// Add event listener to generate button
// when clicked, the writePassword function takes place 
generateBtn.addEventListener("click", writePassword);
// after click, series of confirms with each of the password criteria

// first popup is a PROMPT with password length in the box 

// password between 8 and 128 characters 
// setup 2 alerts, one for less than 8, one for more than 128 characters chosen
// I think go back to the password length after 


// SERIES OF CONFIRMS
// lowercase 
// uppercase
// numbers
// special characters (with if's for each confirm)

// setup code for "if ___ character, include x array" for the algorithm to choose characters from 
// once for loop ends, write password in either alert or in the text box 


