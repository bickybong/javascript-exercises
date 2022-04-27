/* STEPS
1. Loop through till reaches input number
2. Array for creating the sequence
2. return input sequence value */

const fibonacci = function(num) {
    if (!num || num<0){
        return "OOPS";
    }
    array = [1, 1];
    for (i=1; i<num; i++){
        array.push(array[i]+ array[i-1]);
    }
    return array[i-1];
}; 

// Do not edit below this line
module.exports = fibonacci;
