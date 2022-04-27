/* steps
1. go 1 by 1 and solve */

const add = function(num1, num2) {
	 return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  count = 0;
	for (const num of array){
    count += num;
  }
  return count;
};

const multiply = function(array) {
  count = 1;
	for (const num of array){
    count = count* num;
  }
  return count;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num1) {
  count = 1;
  for (i=1; i<=num1; i++){
    count = count* i
  }
  return count
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
