const repeatString = function(word, num) {
    string = ""
    if (num<0){
        return "ERROR";
    }
    for (i=1; i<=num; i++){
        string = string + word;
    } 
    return string;
};

// Do not edit below this line
module.exports = repeatString;
