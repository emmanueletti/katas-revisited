// PROBLEM
// In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.
// BREAKDOWN
// take the string and turn it into an array of words using split
// join it back together using the encoding as the seperator

const urlEncode = function (text) {
  return text.trim().split(' ').join('%20');
};

console.log(urlEncode('Lighthouse Labs'));
console.log(urlEncode(' Lighthouse Labs '));
console.log(urlEncode('blue is greener than purple for sure'));
