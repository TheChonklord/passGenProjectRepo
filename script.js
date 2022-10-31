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
    var passChar = []
    n = 12
    if (prompt("Password length (between 8 and 128 characters)?", "12")) {

    }
    if (confirm("Lowercase? ")) {
      // will neaten up these strings so I don't have to type them like that in the future. Just focusing on getting it operational right now.  
        passChar.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",)
        console.log("yes lowercase ")
    } else {
        console.log("no lowercase")
    }
    if (confirm("Uppercase? ")) {
        passChar.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z".split(""))
        console.log("yes uppercase ")

    } else {
        console.log("no uppercase ")
    }
    if (confirm("Numbers? ")) {
        passChar.push("1","2","3","4","5","6","7","8","9","0".split(""))
        console.log("yes numbers ")

    } else {
        console.log("no numbers")
    }
    if (confirm("Specials? ")) {
        passChar.push("!","@","#","$","%","^","&","*","?".split("")) 
        console.log("yes specials ")

    } else {
        console.log("no specials ");
    } function makePassword(passChar, num) {
        const shuffled = [...passChar].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    } console.log(makePassword(passChar, n));


    
}


// Add event listener to generate button- done
// when clicked, the writePassword function takes place - done
generateBtn.addEventListener("click", writePassword);
// after click, series of confirms with each of the password criteria- done

// first popup is a PROMPT with password length in the box - INCOMPLETE
// password between 8 and 128 characters - INCOMPLETE

// setup 2 alerts, one for less than 8, one for more than 128 characters chosen- INCOMPLETE
// I think go back to the password length after 


// SERIES OF CONFIRMS- done
// lowercase 
// uppercase
// numbers
// special characters (with if's for each confirm)


// once for loop ends, write password in either alert or in the text box - INCOMPLETE


