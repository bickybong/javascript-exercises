/* steps
1. loop through array
2. from obj, push name 
3. push age as yearOfDeath - yearOfBirth
4. find oldest index
5. return name according to index */

const findTheOldest = function(array) {
 names = [];
 ages = [];
 const d = new Date();
 for (const obj of array){
     names.push(obj.name);
     if (obj.yearOfDeath){
         ages.push(obj.yearOfDeath - obj.yearOfBirth);
     } else{
         ages.push(d.getFullYear() - obj.yearOfBirth);
     }
     console.log(names, ages);
 }
 const max = Math.max(...ages);
 const index = ages.indexOf(max);
 return {name: names[index]};
};

// Do not edit below this line
module.exports = findTheOldest;
