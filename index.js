const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?',
];

// // const titleCased = () => {
// //   return tutorials
// // }

// // var sentence = 'what does the this keyword mean?';
// // var capital = function (str) {
// //   return str[0].toUpperCase() + str.slice(1).toLowerCase();
// // };
// // console.log(capitalized);

// // var arr = sentence.split(' ');
// // var capitalized = arr.map(capital);

// // console.log(capitalized);
// // console.log(capitalized);

// function capitalize(capital) {
//   return capital.charAt(0).toUpperCase() + capital.slice(1);
// }

// function titleCased(arr) {
//   let a = [];
//   let c = [];
//   for (sentences of arr) {
//     word = sentences.split(' ');
//     a.push(word);
//   }
//   let k = a.map((sentence) => sentence.map(capitalize));
//   for (d of k) {
//     c.push(d.join(' '));
//   }
//   console.log(c);
// }

// titleCased(tutorials);

// Sample data

// Function to capitalize the first letter of a word
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Function to convert a string to title case
function titleCase(str) {
  return str.split(' ').map(capitalizeFirstLetter).join(' ');
}

// Function to convert all tutorial names to title case
function titleCased() {
  return tutorials.map(titleCase);
}

// Test the function
console.log(titleCased());
