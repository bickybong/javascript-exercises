/* steps
1. loop through array elements
2. loop that takes title
3. put title in new array and return */
const getTheTitles = function(array) {
    books = [];
 for (const obj of array){
     books.push(obj.title);
 }
 return books;
};

// Do not edit below this line
module.exports = getTheTitles;
