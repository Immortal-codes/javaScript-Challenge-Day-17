//Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

//#Source https://bit.ly/2neWfJ2 
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
console.log(powerset([1, 2]));
console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3, 4]));
