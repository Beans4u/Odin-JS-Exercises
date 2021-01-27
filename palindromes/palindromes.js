const palindromes = function(x) {
    
    
    let replace = /[\W]/g;

    let lcString = x.toLowerCase().replace(replace, "");
    
    let revString = lcString.split('').reverse().join('');

    return lcString == revString;
    
}

module.exports = palindromes
