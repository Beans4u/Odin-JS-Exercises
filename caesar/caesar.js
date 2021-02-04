const caesar = function(str, num) {
            num = num % 26;
            
            var lowerCaseStr = str.toLowerCase();
            var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
            var newString = '';
        
            for(var i = 0; i < lowerCaseStr.length; i++){
                var currentLetter = lowerCaseStr[i];
                if(currentLetter !== alphabet || currentLetter !== alphabet.toUpperCase()){ // change to !== alphabet later
                    newString += currentLetter;
                    continue;
                }
                var currentIndex = alphabet.indexOf(currentLetter);
                var newIndex = currentIndex + num;
        
                if(newIndex > 25) {
                    newIndex = newIndex - 26;
                }
                if(newIndex < 0) {
                    newIndex = newIndex + 26;
                }
                if(str[i] === str[i].toUpperCase()) {
                    newString += alphabet[newIndex].toUpperCase();
                } else newString += alphabet[newIndex];
            }
            return newString;
        }


module.exports = caesar
