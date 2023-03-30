"use strict";

// function getObjKey(obj, value) {
//   const romSmbl = Object.keys(obj).find((key) => obj[key] === value);
//   return romSmbl;
// }

// function solution(number) {
//   const romanNumbers = {
//     1: {
//       1: "I",
//       2: "II",
//       3: "III",
//       4: "IV",
//       5: "V",
//       6: "VI",
//       7: "VII",
//       8: "VIII",
//       9: "IX",
//     },
//     2: {
//       1: "X",
//       2: "XX",
//       3: "XXX",
//       4: "XL",
//       5: "L",
//       6: "LX",
//       7: "LXX",
//       8: "LXXX",
//       9: "XC",
//     },
//     3: {
//       1: "C",
//       2: "CC",
//       3: "CCC",
//       4: "CD",
//       5: "D",
//       6: "DC",
//       7: "DCC",
//       8: "DCCC",
//       9: "CM",
//     },
//     4: {
//       1: "M",
//       2: "MM",
//       3: "MMM",
//     },
//   };
//   const numbString = number.toString();
//   const numbArr = Array.from(numbString);
//   const romanNumbArray = new Array();
//   for (let i = numbArr.length, j = 0; i >= 0, j < numbArr.length; i--, j++) {
//     if (Number(numbArr[j]) == 0) continue;
//     romanNumbArray.push(romanNumbers[i][Number(numbArr[j])]);
//   }
//   return romanNumbArray.join("");
// }
// // console.log(solution(123));

// function romArab(roman) {
//   const I = 1;
//   const V = 5;
//   const X = 10;
//   const L = 50;
//   const C = 100;
//   const D = 500;
//   const M = 1000;
//   const newArr = Array.from(roman);
//   // console.log(newArr);
//   let arabNmbr = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     if (
//       newArr[i] == newArr[i + 1] &&
//       newArr[i + 1] == newArr[i + 2] &&
//       newArr[i + 2] == newArr[i + 3]
//     ) {
//       return console.log("vnesi validen rimski broj");
//     } else {
//       if (eval(newArr[i]) < eval(newArr[i + 1])) {
//         arabNmbr = arabNmbr - eval(newArr[i]);
//       } else {
//         arabNmbr = arabNmbr + eval(newArr[i]);
//       }
//     }
//   }
//   return console.log(arabNmbr);
// }

// romArab("XXXX");
// function countRepeaters(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i] == arr[i + 1] &&
//       arr[i + 1] == arr[i + 2] &&
//       arr[i + 2] == arr[i + 3]
//     )
//       return console.log("vnesi validen rimski broj");
//   }
// }
// countRepeaters([0, 2, 1, 1, 1, 5, 6]);
// countRepeaters(["m", "m", "m", "m"]);
// console.log("m" == "M");
