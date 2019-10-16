// const countLetters = function(str) {
//   let count = {};
//   console.log(str);
//   let strNew = str.split(" ").join("").toLowerCase();
//   for (let i = 0; i < strNew.length; i++) {
//     let char = strNew.charAt(i);
//     if (count[char]) {
//       count[char]++;
//     } else {
//       count[char] = 1;
//     }
//   }
//   return count;
// };

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
console.log(letterPositions("lighthouse in the house"));
