const leapYears = function(year) {
 /* 
 1. check divisible by 4 for LY
 2, check divisible by 100 for not LY
 3. check divisible by 400 for LY 
 4. return true/false */

if (year % 4 === 0){
    if (year % 100 === 0 && year % 400 != 0){
        return  false 
    }
    return  true
} else {
    return  false 
}};

// Do not edit below this line
module.exports = leapYears;
