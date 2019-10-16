const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑🛑🛑 ${arr1} !== ${arr2}`)
  }
}

const flatten = function (arr) {
  var newArray = [];
  for (let a = 0; a < arr.length; a++) {
    if (Array.isArray(arr[a])) {
      for (let b = 0; b < arr[a].length; b++) {
        newArray.push(arr[a][b]);
      } }
       else {
        newArray.push(arr[a])
      }
    }
    return newArray;
    
  };
  

//test code
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten(["a", "b", [1, 2], "c", [6]])) // => ['a', 'b', 1, 2, 'c', 6]
