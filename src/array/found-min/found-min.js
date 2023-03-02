/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

30 MIN
*/

// TODO add your code here

function min(array) {
  if (!array || array.length === 0) {
    return null;
  }

  let max = array[0]; // 2

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}



/* function min(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }
  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
} */
// [7, 8, 1, -3]

module.exports = min;
