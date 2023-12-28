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
let arr3 = ['a','b',1,2]
arr3.forEach((item, index) => {
    alert(`${item } is at ${index}`)
})

//Array Methods Tasks (course tasks)
//task 1 => Translate border-left-width to borderLeftWidth
function camelize(str) {
    let arr4 = str.split("-");
    for (i = 1; i < arr4.length; i++){
        arr4[i] = arr4[i][0].toUpperCase() + arr4[i].slice(1);
    }
    let camelCaseStr = arr4.join("")
    return camelCaseStr;
}

let str = prompt("Enter string to convert to camelCase...");
alert(camelize(str))

//task 2 => Filter range
// let arr = [5, 3, 8, 1];
// let finalValue = 0;
// let filtered = filterRange(arr, 1, 4);
// function filterRange(arr, a, b) {
//     return arr.filter((val) => val >= a && val <= b)
// }
// alert(filtered)
// alert(arr)

// task 3 => Filter range "in place"
// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = [];
// filterRangeInPlace(arr, 1, 4);
// function filterRangeInPlace(arr, a, b) {
//     newArr = arr.filter((val) => val >= a && val <= b);
// }
// arr = newArr;
// alert(arr)

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//       if (val < a || val > b) {
//         arr.splice(i, 1);
//       i--;
//     }
//   }
// }
// let arr = [1,2,3,4,5,6,7,8];
// filterRangeInPlace(arr, 1, 4);
// alert( arr );

// task 4 => Sort in decreasing order
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b > a ? 1 : -1)
// alert(arr)




