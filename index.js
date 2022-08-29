function reverseString(word) {
  // TODO: implement string reversing functionality
  return word.split("").reverse().join("");

}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  return word === reversedWord
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
