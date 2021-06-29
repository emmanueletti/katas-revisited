// PROBLEM
// Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0
// BREAKDOWN
// input: array and string "even" or "odd"
// what is even? - multiple of 2 without any remainders
// what is odd? - multiple of 3 without any remainders
// if even, reduce the array down to a sum of only elements that are even
// otherwise, reduce the array down to a sum of only elements that are oddg
// with a return of '0' if there is no matchin

// INITIAL SOLUTION
// const conditionalSum = function (values, condition) {
//   if (condition === 'even') {
//     const evenOutput = values.reduce((acc, curr) => {
//       if (curr % 2 === 0) {
//         return (acc += curr);
//       }
//       return acc;
//     }, 0);

//     return evenOutput;
//   }

//   const oddOutput = values.reduce((acc, curr) => {
//     if (curr % 2 !== 0) {
//       return (acc += curr);
//     }
//     return acc;
//   }, 0);
//   return oddOutput;
//   //
// };

// REFACTOR
// initial solution repeats 90% of calculation logic
// can i simplify by calculating both even and odd in one step
// and then return whichever one is specified
const conditionalSum = function (values, condition) {
  let evenOutput = 0;
  let oddOutput = 0;

  // calculate both even and odd in single loop
  values.forEach((el) => {
    if (el % 2 === 0) {
      return (evenOutput += el);
    }
    return (oddOutput += el);
  });

  // return the output that is specified
  if (condition === 'even') {
    return evenOutput;
  }
  return oddOutput;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even')); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd')); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], 'even')); // 144
console.log(conditionalSum([], 'odd')); // 0
