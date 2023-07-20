// 2.13 Loops: while and for

// task 1
// let i = 3;
// while (i) {
//   alert(i--); //1
// }

//task 2
// let i = 0;
// while (i++ < 5) alert(i);
// let i = 0;
// while (++i < 5) alert(i);

// task 3
// for (let i = 0; i < 5; i++) alert(i); //0 to 4
// for (let i = 0; i < 5; ++i) alert(i); // 0 to 4

// task 4 Use the for loop to output even numbers from 2 to 10.
// for (let i = 2; i <= 10; i++){
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

// task 5 Rewrite the code changing the for loop to while
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }
// ==>
// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

//task 6 -> Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// let num;
// do {
//     num = prompt("Enter a number greater than 100...");
//     if (num > 100 || num == null || num == '') { break; }
// }while(num <=100 )

// task 7 -> o/p prime numbers

// let n = Number(prompt("Enter a number ..."));

// for (i = 2; i <= n; i++) {
//   let flag = 0;
//   for (j = 2; j < i; j++) {
//     if (i % j == 0) {
//       flag = 1;
//       break;
//     }
//   }
//   if (flag == 0) {
//     document.write(i + "<br>");
//   }
// }

// 2.14 switch
// task 1 switch to if
// let browserName = prompt("Enter Your Browser Name :");
// if (browserName == "Edge") {
//   alert("You've got the Edge!");
//   // break;
// } else if (
//   browserName == "Chrome" ||
//   browserName == "FireFox" ||
//   browserName == "Safari" ||
//   browserName == "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// task 2 if to switch
// let a = +prompt("a?", "");
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//         break;
//     case 2:
//     case 3:
//         alert("2,3");
//         break;
// }

// 2.15 function-basics
//task ==>Rewrite the function using '?' or '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// let age = Number(prompt("Enter your age"));
// checkAge(age);
// function checkAge (age) {
//     return (age > 18) ? alert("Welcome") : confirm("Did your parents allowed?");
// }
// function checkAge (age)  {
//     return (age > 18) || confirm("Did your parents allowed?");
// }

// task => Function min(a, b)

// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));

// function findMin(a, b) {
//     return (a < b) ? a : b;
// }

// const min = findMin(a, b);
// alert(min);

//task ==> Function pow(x,n)

// let x = Number(prompt("Enter x"));
// let n = Number(prompt("Enter n"));

// function findPow(x, n) {
//     let pow = x;
//     for (i = 1; i < n; i++){
//         pow *= x;
//     }
//     return pow;
// }

// // 1 < 3
// // 2 < 3
// // 5 * 5
// // 25 * 5= 125

// if (n < 1) {
//   alert(`Atmost raise to 1 is needed`);
// } else {
//     const result = findPow(x, n);
//     alert(result);
// }

// 2.16 Function expressions

// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes()
//     } else {
//         no()
//     }
// }
// function yesAgree() {
//     alert("Agreed")
// }
// function noAgree() {
//     alert("Not Agreed");
// }
// ask("Do You agree", yesAgree, noAgree);

// 2.17 arrow functions
// task -> function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// const ask = (question, yes, no) => {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// };

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

//square objects
// let user = {};
// user["like birds"] = true;
// alert(user["like birds"])
// delete user["like birds"];

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//     alert(key + " : " + user[key])
// }

// ==> 4.1
// tasks 1 -> Hello, object
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// task 2 -> Check for emptiness
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule)); // false

// function isEmpty(elem) {
//     for (let key in elem) {
//         return false;
//     } return true;
// }

// task 3 -> Sum object properties
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key]
// }
// alert(sum);

// task 4 ==> Multiply numeric property values by 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);

// function multiplyNumeric(elem) {
//     for (let key in elem) {
//         if (typeof elem[key] == 'number') {
//             elem[key] *= 2;
//         }
//     }
// }

// console.log(menu);


//4.2 object - copy
// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = {};

// for (let key in user) {
//     clone[key] = user[key];
// }

// for (let key in clone) {
//   alert(clone[key])
// }

// Object.assign.

// let user = { name: "John" };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// Object.assign(user, permissions1, permissions2)

// for (let key in user) {
//     alert(key + " : " + user[key])
// }

// 4.5 constructor-new
// function User(name, bool) {
//     this.name = name;
//     this.isAdmin = bool;
// }
// const user = new User("Akhil", true);
// alert(user.name);
// alert(user.isAdmin);

// function User(name) {
//     if (!new.target) {
//         return new User(name);
//     }
//     this.name = name;
// }

// let newName = User("Akhil");
// let newName2 = new User("Kevish");

// alert("Name without new" + newName2.name);
// alert("Name with new" + newName.name);

//task =>


// function Accumulator(initialValue) {
//     this.value = initialValue;
//     this.read = function () {
//         this.value += Number(prompt("Enter Value to add"))
//     }
// }

// let accumulator = new Accumulator(1); // initial value
// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value
// alert(accumulator.value); // shows the sum of these values

// 5.3 Strings
// task 1 ==> Uppercase the first character ==> ucFirst("john") == "John";

// function ucFirst(str) {
    //     return  str.charAt(0).toUpperCase() + str.slice(1);
    // }
    // alert(ucFirst('akhil'))
    
    
// task 2 ==> Check for spam
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// function checkSpam(str) {
//     return (
//       str.includes("viagra") ||
//       str.includes("XXX")
//     );
// };

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// // task 3 => Truncate the text
// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
// For instance:

// function truncate(str, maxlength) {
//     let length = str.length
//     // alert(length);
//     if (length > maxlength) {
//         return str.slice(0,maxlength) + "..."
//     } else {
//         return str
//     }

// }
// let str = prompt("Enter String");
// let maxlength = prompt("Enter Max Length");
// alert(truncate(str,maxlength))

// task 4 => Extract the money
// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
// The example:
// alert( extractCurrencyValue('$120') === 120 ); // true

// function extractCurrencyValue(value) {
//     if (value.charAt(0) == '$') {
//         return parseInt(value.slice(1))
//     } else {
//         return parseInt(value);
//     }
// }
// let value = prompt("Enter value...");
// alert(extractCurrencyValue(value));