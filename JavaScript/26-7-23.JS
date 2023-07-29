//rest => arguments to array

// const restFun = (...args) => {

//     let sum = 0;
//     for (let val of args) {
//          sum += val;
//     }
//     return sum
// }
// alert(restFun(1,2,3,4,5,6,7,8))

//spread => array to arguments

//tasks => 6.3
// Sum with closures
// function sum(a) {
//      return function(b) {
//         return a + b;
//     }
// }
// alert(sum(10)(20))

//task 2 =>Filter through function
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(3, 6)));
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// function inBetween(a,b) {
//     return function (x) {
//         console.log("a : " + a +  " b : " + b +   " x : " + x );
//         return x>= a && x <= b
//     }
// }
// function inArray(arr2) {
//     return function (x) {
//         console.log("arr : " + arr2 + " x : " + x);
//         return arr2.includes(x)
//     }
// }

//task 3 ==> dort by fields
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];
// // console.log(users.sort((a, b) => a.name > b.name ? 1 : -1));
// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));

// function byField(sortBy) {
//     return function (x,y) {
//          return x[sortBy] - y[sortBy] ? 1 : -1
//      }
// }

//task 4 => Array of functions
// function makeArmy() {
//   let shooters = [];

//     for (let i = 0; i < 10;i++) {
//     let shooter = function() { // create a shooter function,
//       alert( i ); // that should show its number
//     };
//     shooters.push(shooter); // and add it to the array
//   }

//   // ...and return the array of shooters
//   return shooters;
// }

// let army = makeArmy();

// // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.

//6.6 => function-object#tasks
// task 1 => Set and decrease for counter
// function makeCounter() {
//   let count = 0;
//     function counter() {
//         return count++;
//   }
// //   counter.increase = () => count++;
//   counter.decrease = () => count--;
//   counter.set = (value) => count = value;
//   return counter;
// }
// let counter = makeCounter();
// counter.set(10);
// alert(counter())
// alert(counter())
// // alert(counter.increase());
// // alert(counter.increase());
// alert(counter.decrease());
// alert(counter.decrease());

//6.8 => Scheduling: setTimeout and setInterval
//task1=>Output every second //setinterval
// function printNumbers(from, to) {
//     function runNow() {
//         document.write(from+ " ");
//           if (from == to) {
//             clearInterval(interval);
//           } else {
//               from++;
//           }
//     }
//     let interval = setInterval(runNow,1000)

// }
// printNumbers(10, 15);
//task1=>Output every second //settimeout


// function printNumbers(from, to) {
//     let timeout = setTimeout(function func() {
//         if (from == to) {
//           clearTimeout(timeout)
//         } else {
//               document.write(from++ + "<br>");
//               timeout = setTimeout(func, 1000);
//       }
//     }, 1000)
    
// }
// printNumbers(10, 15);

//6.9 => Decorators and forwarding, call/apply
// let firstObj = {
//     name: "Akhil",
//     age: 20,
//     // personalDetails: function () {
//     //     console.log(this.name);
//     // }
// }
// let secondObj = {
//     name: "Kevish",
//     age: 20,
// }

//  function personalDetails (state,country) {
//     let { name, age } = this;
//     console.log(name + " , " + age + " , " + state + " , " + country);
// }

// //call || function borrowoing
// personalDetails.call(firstObj , "Gujarat" , "India")
// personalDetails.call(secondObj , "Dar-Es-Saalam" , "South Africa")
// firstObj.personalDetails.call(secondObj)
