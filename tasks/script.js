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
// let number = 4;

// let result = 1;
// for (let i = 1; i <= number; i++) {
//   result *= i;
// }
// console.log(result);

// const recursiveFunction = (number) => {
//   if (number === 1) {
//     return 1;
//   }
//   return number * recursiveFunction(number - 1);
// };
// console.log(recursiveFunction(number));

// create "native" method //
// String.prototype.repeat =
//   String.prototype.repeat ||
//   function (times) {
//     let str = "";
//     for (let i = 0; i < times; i++) {
//       str += this;
//     }
//     return str;
//   };
// console.log("test".repeat(3));

// reverse each word in sentence //
// let sentence = "I love javascript";
// function reverseWords(sentence) {
//   return sentence
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }
// console.log(reverseWords(sentence));
// console.log(sentence);

// fizzbuzz challenge //
// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, "FizzBuzz");
//     continue;
//   }
//   if (i % 3 === 0) {
//     console.log(i, "Fizz");
//     continue;
//   }
//   if (i % 5 === 0) {
//     console.log(i, "Buzz");
//   }
// }

// check for anagrams //
// let firstWord = "army";
// let secondWord = "mary";
// const anagramCheck = (firstWord, secondWord) => {
//   return (
//     firstWord.toLowerCase().split("").sort().join("") ===
//     secondWord.toLowerCase().split("").sort().join("")
//   );
// };
// console.log(anagramCheck(firstWord, secondWord));

// curry function //
// function curryFunction(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a, b, c);
//     };
//   };
// }
// let curryPartOne = curryFunction("partOne");
// curryPartOne(2)(3);
