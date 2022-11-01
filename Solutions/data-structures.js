// class LinkedListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;

// }
// }
// class ListNode {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   push(value) {

//     const newNode = new LinkedListNode(value);
//     if (!this.head && !this.tail) {
//       this.head = newNode;
//       this.tail = newNode;
//       return this;
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//   }
//   readData(numValue) {
//     let head = this.head;
//     const arrayValue = [];
//     let counter = 0;
//     while (counter < numValue) {
//       arrayValue.push(head.value);
//       head = head.next;
//       counter++;
//     }
//     return arrayValue;
//   }
// }
// const newNode = new ListNode();
// newNode.push(6);
// newNode.push(4);
// newNode.push(3);

// console.dir(newNode)
// // console.log(newNode.readData(4));

// function processData(input) {
//     //Enter your code here
//     const S = [];
//     let lastAnswer = 0;
//     const inputArray = input.split("\n");
//     const N = inputArray[0].split(" ")[0];

//     for (let i = 0; i < N; i++) {
//       S[i] = [];
//     }

//     inputArray.slice(1).forEach((el) => {
//       const [q, x, y] = el.split(" ").map(Number);
//       const seq = (x ^ lastAnswer) % N;

//       switch (q) {
//         case 1:
//           S[seq].push(y);
//           break;
//         case 2:
//           const size = S[seq].length;
//           const index = y % size;
//           lastAnswer = S[seq][index];
//           console.log(lastAnswer);
//           break;
//       }
//     });

//     return S;
//   }
// const array = [2, 5, 4, 10];
// const dinamicArray = (array) => {
//   const newAraay = [];
//   let value = 0;

//   for (let i = 0; array[i]; i++) {
//     array.splice(i)

//     value = array[i] * array[i + 1];
//     newAraay.push(value);
//     array[i + 1] = newAraay[i];

//     return array
//   }
//   const newAraayFix = newAraay.slice(0, array.length - 2);
//   const lastElement = newAraayFix.pop();
//   return lastElement;
//   return newAraay.slice(0, array.length - 2);
// };
// console.log(dinamicArray(array));

// const productOfAllOthernumber = (array) => {
//   let beforeProductSoFar = 1;
//   const product = new Array(array.length - 1);
//   for (let i = 0; array[i]; i++) {
//     product[i] = beforeProductSoFar;
//     beforeProductSoFar = array[i];
//   }
//   let afterProductsSoFar = 1;
//   for (let j = array.length - 1; j > -1; j--) {
//     product[j] *= afterProductsSoFar;
//     afterProductsSoFar *= array[j];
//   }
//   return product;
// };
// console.log(productOfAllOthernumber([1, 2, 3, 4]));

// const assert = require('assert');

// const test = [`QdjdhdjYbdndnHdb Bfnd+Bddkdj'dmdm_dkdm`, 'Qdjdhdj-Ybdndn-Hdb-Bfnd-Bddkdj-dmdm-dkdm'];

const inRange = (x, min, max) => x >= min && x <= max;

const isUpper = (char) => inRange(char, 'A', 'Z');

const isLower = (char) => inRange(char, 'a', 'z');

const isNumeric = (char) => inRange(char, '0', '9');

const isAlphaNumeric = (char) => isUpper(char) || isLower(char) || isNumeric(char);

const replaceSpecialChars = (str, symbol = '-') => {
  const first = str[0];
  let result = isAlphaNumeric(first) ? first : '';
  for (let i = 1; i < str.length; i++) {
    const char = str[i];
    if (isUpper(char) && isLower(str[i - 1])) result += `${symbol}${char}`;
    else if (!isAlphaNumeric(char)) result += symbol;
    else result += char;
  }
  return result;
};

// const [given, expected] = test;

const result = replaceSpecialChars(`Qdj-dhdjYb-DndnHdb Bfnd+Bddkdj'dmdm_dkdm`);
console.log(result)
// assert.strictEqual(result, expected);