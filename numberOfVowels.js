// PROBLEM
// count the number of vowels in a string
// BREAKDOWN
// loop through the string
// use the includes string method to see if the string includes

const numberOfVowels = function (data) {
  // store vowels in an array
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let output = 0;

  // loop through each vowel in the array
  // at each iteration, check if the string contains the vowel
  // if "includes" function returns 'true' then increase counter
  vowels.forEach((vowel) => {
    if (data.includes(vowel)) {
      output++;
    }
  });

  return output;
};

console.log(numberOfVowels('orange')); // 3
console.log(numberOfVowels('lighthouse labs')); // 5
console.log(numberOfVowels('aeiou')); // 5
