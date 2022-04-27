const reverseString = function(word) {
    splits = [...word];
    string = "";
    console.log(splits);
    for (let letter of splits){
        string = letter + string;
    }
    return  string;
};

// Do not edit below this line
module.exports = reverseString;
