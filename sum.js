// PROBLEM
// find the two largest numbers in an array and sum them up
// BREAKDOWN
// input is an array
// output is a single summed number
// find the largest element
// find the second largest element
// the largest and second largest element would be the first two indexes in an array sorted from largest to smallest

const sumLargestNumbers = function (data) {
  const output = data
    .sort((a, b) => {
      return b - a;
      // sort array from largest to smallest
    })
    .filter((el, i) => {
      return i <= 1;
      // filter down to array of just index 0 and 1
    })
    .reduce((acc, curr) => acc + curr, 0);
  // sum up the array

  return output;
};

// TEST
console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126
