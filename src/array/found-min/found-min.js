/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here

function min(array) {
  let minValue = array[0];
  // Tableau VIDE
  if (!minValue) {
    // = UNDEFINED
    return null;
  }

  for (let i = 0; i <= array.length - 1; i++) {
    console.log(minValue, array[i]);
    if (minValue > array[i]) {
      minValue = array[i];
    }
  }

  return minValue;
}
// [7, 8, 1, -3]

module.exports = min;
