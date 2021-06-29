// Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
// BREAKDOWN
// input" array of objects
// output an object
// need to find the object that has the longest value held in its name property
// sort the array by name length - largest to smallest
// return the first index

const instructorWithLongestName = function (instructors) {
  instructors.sort((a, b) => {
    if (a.name.length > b.name.length) {
      return -1;
    }
    if (a.name.length < b.name.length) {
      return 1;
    }
    return 0;
  });

  return instructors[0];
};

console.log(
  instructorWithLongestName([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Jeremiah', course: 'Web' },
    { name: 'Ophilia', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);
console.log(
  instructorWithLongestName([
    { name: 'Matthew', course: 'Web' },
    { name: 'David', course: 'iOS' },
    { name: 'Domascus', course: 'Web' },
  ])
);
