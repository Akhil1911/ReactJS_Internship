//5.4 Arrays

// Push -> Add element at end
// Pop -> remove element from end
// shift -> remove element from start
// unshift -> add element at start

// let fruits = []; // make an array
// fruits[99] = 5; // assign a property with the index far greater than its length
// fruits.age = 25; // create a property with an arbitrary name
// console.log(fruits.age);

// let arr = ["firstt", "second", ["apple","banana"], "forth"]
// for (let val of arr) {
//     alert("forof : "  + val)
// }
// for (let key in arr) {
//     alert("forin : " + arr[key])
// }

// task => array operations
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// let getOddLength = (styles.length - 1) / 2;
// // alert(getOddLength)
// styles[getOddLength] = "Classics";
// styles.shift();
// styles.unshift("Rap", "Reggae")
// for (i = 0; i < styles.length; i++){
//     alert(styles[i])
// }

// task => Sum input numbers

// let values = [];
// let sum = 0;
// let num;
// function sumInput() {
//     while (true) {
//          num = (prompt("Enter number"));
//          if (num === null || num === "" || isNaN(num)) {
//              for (i = 0; i < values.length; i++) {
//                sum += values[i];
//              }
//            return sum;
//          } else {
//            values.push(parseFloat(num));
//          }
//     }
// }
// alert("Sum is : " + sumInput());

// task => A maximal subarray

// //wrong way with not exact solution
// let num;
// let values = [];
// let allNegative = false;
// let negative = 0;
// let maxValue = 0;

// function getMaxSubSum(arr) {
    
//   //checking all values less than 0
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       negative++;
//     }
//   }
//   if (negative == arr.length) {
//     allNegative = true;
//     alert("Sum is : " + 0);         
//   }

//   //getting max value
//   for (let val of arr) {
//     if (!allNegative && arr.length > 0 && val > 0) {
//     //   if (val > 0) {
//         maxValue += Math.max(val);
//     //   }
//     }
//   }
//   if (!allNegative && arr.length > 0) alert("Max is : " + maxValue);
// }
// function sumInput() {
//   while (true) {
//     num = prompt("Enter number");
//     if (num === null || num === "" || isNaN(num)) {
//       getMaxSubSum(values);
//       return false;
//     } else {
//       values.push(parseFloat(num));
//     }
//   }
// }
// sumInput();

//proper solution

// function getMaxSubSum(arr) {
//     let partialSum = 0;
//     let maxSum = 0;

//     for (let val of arr) {
//         partialSum += val;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0;
//     }
//     return maxSum
// }

// alert( getMaxSubSum([2 , -1, 2, 3, -9]) ); // 6
// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([-1, -2, -3]) ); // 0


//5.5 Array methods =>
let arr = ["I", "study", "JavaScript"];
let arr2 = ["I", "study", "JavaScript"];
arr.splice(0, 2, "complex", "language");  //🤔
 alert(arr)
arr2.splice(2, 0, "complex", "language");  //🤔
alert(arr2)

// arr.forEach
// let arr = ['a','b',1,2]
// arr.forEach((item, index) => {
//     alert(`${item } is at ${index}`)
// })

// function camelize(str) {
//     let str = "camel-case-new-old";
//     let arr = str.split("-");
//     let newArr = [];
//     for (i = 1; i < arr.length; i++) {
//       newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
//     }
//     newArr.unshift(arr[0]);
//     let newStr = newArr.join("");
//     return newStr
// }

// let str = prompt("enter string");
// alert(camelize(str));
