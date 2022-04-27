const removeFromArray = function(array, ...nums) {
 for (const num of nums){
    count = 0
     for (const numArray of array){
        if (numArray === num){
            array.splice(count,1);
        }
        console.log(array, count)
        count++;
 }}
 return array;
};

// Do not edit below this line
module.exports = removeFromArray;
