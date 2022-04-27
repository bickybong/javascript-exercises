const sumAll = function(startNum, endNum) {
 /* 
 1. Find all the numbers from start to end
 2. Put them in an array
 3. Loop to add all the numbers in array */
 sum = 0
 if (startNum<0||endNum<0||typeof startNum != "number"||typeof endNum != "number"){
     return "ERROR";
 }
 if (startNum <= endNum){
    for (i=startNum; i<= endNum; i++){
        sum += i;
 }} else {
    for (i=endNum; i<= startNum; i++){
        sum += i;
 }}
 return sum;
};

// Do not edit below this line
module.exports = sumAll;
