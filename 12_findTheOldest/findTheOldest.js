/* steps
1. sort the ages
2. take name of oldest person*/
people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

 function findTheOldest(array) {
     sorted = array.sort((a,b) => {
         if (!a.yearOfDeath) {
             a.yearOfDeath = (new Date()).getFullYear()
         } else if (!b.yearOfDeath) {
            b.yearOfDeath = (new Date()).getFullYear()
        }
     return ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) ? -1: 1});
     return sorted[0];
      };
console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
