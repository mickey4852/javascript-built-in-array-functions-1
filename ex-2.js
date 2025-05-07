let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  let result = words.filter(function (oneword) {return oneword.length >= 5;});
  return result;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
