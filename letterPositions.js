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


const letterPositions = function(sentence) {
  const results = {};
  console.log(sentence);
  let newSentence = sentence.toLowerCase();
  for (let i = 0; i < newSentence.length; i++) {
    let char = newSentence[i];

    if(results[char]) {
      results[char].push(i);
      // key exists
      //append index to key value
    } else {
      results[char] = [i];

      //create new key value pair
    
    
  }
}
  return results;
};

// TEST CODE
// console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);