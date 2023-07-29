// 5.11 date and time
// task 1 => Create a date
// let date = new Date(2012, 1, 20);
// alert(date)

//TASK => DAY AGO
// let date = new Date(2015, 0, 2);
// function getDateAgo(date, days) {
//     let newDate = new Date(date);
//     newDate.setDate(date.getDate() - days)
//     // return newDate;
//     return newDate.getDate();
// }

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)
// alert(date)

// TASK => Last day of month?
// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month).setMonth(month + 1);
//     let date2 = (new Date(date).setDate(0))
//     return (new Date(date2).getDate())
// //    let date = new Date(year, month + 1, 0);
// //    return date.getDate();
// }
// alert(getLastDayOfMonth(2012, 1));
// alert(getLastDayOfMonth(2014, 2));

//TASK => Todays total seconds
// function getSecondsToday() {
//   let date = new Date();
//   return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }
// alert(getSecondsToday());

//TASK => tomorrow total seconds remaining
// function getSecondsToTomorrow() {
//   let date = new Date();
//   return 86400 - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());
// }
// alert(getSecondsToTomorrow());

//JSON
//task 1 => Turn the object into JSON and back
// let user = {
//   name: "John Smith",
//   age: 35,
// };

// user = (JSON.stringify(user, null, 2))
// alert(user)
// let jsonUser = JSON.parse(user)
// for (let val of Object.values(jsonUser)) {
//     alert(val)
// }

//task 2 => Exclude backreferences

// recursion
// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// function sumSalaries(company) {
//   if (Array.isArray(company)) {
//     return company.reduce((prev, acc) => prev + acc.salary, 0);
//   } else {
//     let sum = 0;
//     for (let val of Object.values(company)) {
//       sum += sumSalaries(val);
//     }
//     return sum;
//   }
// }
// alert(sumSalaries(company));

//tasks => Sum all numbers till the given one
// let sum = 0;
// let num = Number(prompt("Enter Number"))
// alert(getSum(num))
// First way for loop=====================>
// function getSum(n) {
//     for (i = 1; i <= n; i++){
//         sum += i;
//     }
//         return sum
// }
//second way recursion=====================>
// function getSum(n) {
//     if (n == 1 || n<=0) {
//         return 1;
//     } else {
//         // alert(n)
//         return n + getSum(n - 1)
//     }
// }
//third way Using the arithmetic progression formula=====================>
// sumTo(n) = n*(n+1)/2
// function getSum(n) {
//     return (n * (n + 1)) / 2;
// }

//task 2 => Factorial
// let fact = 1;
// let num = Number(prompt("Enter Number"))
// alert(factorial(num))
// function factorial(n) {
//     if (n <= 0) {
//         return 0
//     }
//     else if (n == 1) {
//         return fact;
//     } else {
//         return n * factorial(n-1)
//     }
// }

//task 3 => fibonacci
// let num = Number(prompt("Enter Number"))
// alert(fib(num))
// function fib(n) {
//     let x = 1;
//     let y = 1;
//         for (let i = 3; i <= n; i++){
//             let fibo = x + y;
//             x = y;
//             y = fibo;
//         }
//         return y;
//     }

//0 , 1 , 2 , 3 , 4 , 5 , 6 , 7
//0 , 1 , 1 , 2 , 3 , 5 , 8 , 13

//task 4=> Output a single-linked list
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function printList(list) {
//     alert(list.value)
//     if (list.next != null) {
//         printList(list.next)
//     }
// }
// printList(list)

//task 5=> Output a single-linked list in reverse order
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };


// function printList(list) {
//     if (list.next != null) {
//         printList(list.next)
//     }
//     alert(list.value)
// }
// printList(list)

