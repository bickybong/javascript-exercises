/* steps
1. break string into array
2. check if letter
3. shift each letter
4. return formed back string */

const caesar = function(string, num) {
 array = [... string];
 newString = []
 for (const letter of array){
     if ((/[a-zA-Z]/).test(letter)){
         if (num >26 || num<-26){
             num = num%26
         }
        code = letter.charCodeAt() + num;
        console.log(num)
        if (65<= code && code<= 90||97<= code && code<=122){
            newString.push(String.fromCharCode(code));
        } else if ( 91<= code && code<= 96||code>122){
            newString.push(String.fromCharCode(code-26));
        } else{
            newString.push(String.fromCharCode(code+26));
        }
     } else{
        newString.push(letter);
     }
    }
 return newString.join("");
};

// Do not edit below this line
module.exports = caesar;
