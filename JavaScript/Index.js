// Hello World Module 2

//2.1 hello world
// document.write("Hello Duniya");

//2.1 task 1
// hardcored alert

//2.1 task 2
// alert("I’m JavaScript!");

// Variables 2.4

//task 1
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
// ==============================
// let admin;
// let name = "John";
// admin = name;
// alert(admin);
// ==============================

//task 2
// Create a variable with the name of our planet. How would you name such a variable?
// let   ourPlanet = "Earth";
// Create a variable to store the name of a current visitor to a website. How would you name that variable?
// let currentVisitor = "";

// Datatypes 2.5
// let name = "Ilya";
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?

// PopUb Boxes 2.6
// Task -> Create a web-page that asks for a name and outputs it.

// const name = prompt("Enter Your Name");
// alert("Namastey "  + name);

// 2.8 Basic operatorss, maths
// task
// What are the final values of all variables a, b, c and d after the code below?
// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// What are the values of a and x after the code below?
// let w = 2;
// let x = 1 + (w *= 2); // 5

// What are results of these expressions?
// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1
// true + false //1
// 6 / "3"//2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5  // "  -9  5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

// 2.10 Conditions
//task -> Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// const officialName = prompt("What is the “official” name of JavaScript?");
// if (officialName == "ECMAScript") {
//     alert("Right!")
// } else {
//     alert("You don’t know? ECMAScript!");
// }

//task -> Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.

// const number = Number(prompt("Enter Number"));
// if (number == 0) {
//   alert("0");
// } else if(number > 0) {
//   alert("1");
// } else if (number < 0) {
//     alert("-1")
// } else {
//     alert("Invalid Number")
// }

// task -> Rewrite this if using the conditional operator '?':

// let a = Number(prompt("Enter value of a"));
// let b = Number(prompt("Enter value of b"));
// let result = (a + b < 4) ? result = "Below" : result = "Over";
// alert(result);

// task -> Rewrite if..else using multiple ternary operators '?'.

// let login = prompt("Who are you?");
// let message = (login == "Employee")
//     ? ("Hello")
//     : login == "Director"
//     ? ("Greetings")
//     : login == ""
//     ? ("No login")
//     : ("");

// alert(message);

// task -> Write an if condition to check that age is between 14 and 90 inclusively.

// const age = Number(prompt("Enter your age"));
// alert(age)
// if (age >= 14 && age <= 90) {
    //     alert("Good")
    // }else {alert("Not Good")}
    
// task -> Write an if condition to check that age is not between 14 and 90 inclusively.
// const age = Number(prompt("Enter your age"));
// if (!age >= 14 && !age <= 90) {
//   alert("Good");
// } else {
//   alert("Not Good");
// }

// task -> Write an if condition to check that age is not between 14 and 90 inclusively.
// if (age < 14 || age > 90) {
//     alert("Not between")
// } else {
//     alert("Between")
// }

// task -> Check the login

const isAdmin = prompt("Who's there?");
if (isAdmin == "Admin") {
    const password = prompt("Enter Password");
    if (password == "" || password == null) {
        alert("Canceled");
    } else if (password == "TheMaster") {
        alert("Welcome!")
    } else {
        alert("Wrong password");
    }
}
 else if (isAdmin == "" || isAdmin == null) {
   alert("Canceled");
 } else {
   alert("I don't know you");
 }

