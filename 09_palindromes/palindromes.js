/* steps
1. break string to array
2. remove all non-letters from array
3. flip array
4. check if flip array same as non-flipped */

const palindromes = function (word) {
    newa = []
    reverse = [];
    for(letter of word.toLowerCase()){
        if (!(/[a-zA-Z]/).test(letter)){
            continue;
        }
        newa.push(letter);
        reverse.unshift(letter);
    }
    if (reverse.toString() === newa.toString()){
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
