const caesar = function (str, num) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  const newString = str
    .split("")
    .map((char) => {
      //if: we can't find our character in the alphabet, return it as is
      if (alphabet.indexOf(char.toLowerCase()) >= 0 ) { 
        //check for lowercase
        let isLowerCase = false;

        //create case switch
        if (char === char.toLowerCase()) {
          isLowerCase = true;
        }

        // function mod(n, m) {
        //   return ((n % m) + m) % m;
        // }

        const oldIndex = alphabet.indexOf(char.toLowerCase());
        const newIndex = (((oldIndex + num) % 26) + 26) % 26;
        if (isLowerCase === false) {
          console.log(newIndex);
          return alphabet[newIndex].toUpperCase(); // this is being read as undefined now for some reason
        }

        return alphabet[newIndex];
      };
    
      //return as-is if not in alphabet index (symbols)
      return char;
    

    }).join("");

  

  return newString;

};

// console.log(caesar("Hello, World!", -29));

module.exports = caesar;


//   for (let i = 0; i < str.length; i++) {
  // let IsLowerCase = false;


  // Check "is it a letter"
  //// If not, add it to the string as-is and skip to the next one
  //// If yes:

  // Check if it's upper or lower case
  //// if lower, set isLowerCase to true
  //// if upper, leave isLowerCase alone

  // Shift the character
  //// Find where our character is in the alphabet and add/subtract
  //// our "shift" to grab a letter at the new index

  // Convert to upper/lower if necessary

  // Add to string

  // var currentLetter = lowerCaseStr[i];
  // if(alphabet.includes(currentLetter) || currentLetter !== alphabet.toUpperCase()){ // change to !== alphabet later
  //     newString += currentLetter;
  //     continue;
  // }
  // var currentIndex = alphabet.indexOf(currentLetter);
  // var newIndex = currentIndex + num;

  // if(newIndex > 25) {
  //     newIndex = newIndex - 26;
  // }
  // if(newIndex < 0) {
  //     newIndex = newIndex + 26;
  // }
  // if(str[i] === str[i].toUpperCase()) {
  //     newString += alphabet[newIndex].toUpperCase();
  // } else newString += alphabet[newIndex];