const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(str) {
  let count = {};
  console.log(str);
  let strNew = str.split(" ").join("").toLowerCase();
  for (let i = 0; i < strNew.length; i++) {
    let char = strNew.charAt(i);
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
};

// TEST CODE
console.log(assertEqual(countLetters("lighthouse in the house")["l"], 1));
console.log(assertEqual(countLetters("lighthouse in the house")["g"], 3));

module.exports = countLetters;