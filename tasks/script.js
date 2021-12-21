// remove duplicates from an array //
// let arr = ["a", "b", "c", "a"];

// let result = [...new Set(arr)];

// let result = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });

// console.log(result);

// check if string is palindrome or not //
// let string = "Madam";
// function isPalindrome(word) {
//   if (word.toLowerCase() === word.toLowerCase().split("").reverse().join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome(string));

// calculate factorial //
let number = 4;

// let result = 1;
// for (let i = 1; i <= number; i++) {
//   result *= i;
// }
// console.log(result);

const recursiveFunction = (number) => {
  if (number === 1) {
    return 1;
  }
  return number * recursiveFunction(number - 1);
};
console.log(recursiveFunction(number));
