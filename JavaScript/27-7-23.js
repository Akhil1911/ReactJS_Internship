// function slow(x) {
//   // there can be a heavy CPU-intensive job here
//   alert(`Called with ${x}`);
//   return x;
// }
// function cachingDecorator(func) {
//   let cache = new Map();

//   return function(x) {
//     if (cache.has(x)) {    // if there's such key in cache
//       return cache.get(x); // read the result from it
//     }

//     let result = func(x);  // otherwise call func

//     cache.set(x, result);  // and cache (remember) the result
//     return result;
//   };
// }

// slow = cachingDecorator(slow);

// alert( slow(1) ); // slow(1) is cached and the result returned
// alert( "Again: " + slow(1) ); // slow(1) result returned from cache

// alert( slow(2) ); // slow(2) is cached and the result returned
// alert( "Again: " + slow(2) ); // slow(2) result returned from cachepinde

// function slow(x) {
//   // there can be a heavy CPU-intensive job here
//   alert(`Called with ${x}`);
//   return x;
// }
// function cachingDecorator(func) {
//   let cache = new Map();

//   return function(x) {
//     if (cache.has(x)) {    // if there's such key in cache
//       return cache.get(x); // read the result from it
//     }

//     let result = func(x);  // otherwise call func

//     cache.set(x, result);  // and cache (remember) the result
//     return result;
//   };
// }

// slow = cachingDecorator(slow);

// alert( slow(1) ); // slow(1) is cached and the result returned
// alert( "Again: " + slow(1) ); // slow(1) result returned from cache

// alert( slow(2) ); // slow(2) is cached and the result returned
// alert( "Again: " + slow(2) ); // slow(2) result returned from cachepinde
// let user = {
//   firstName: "John",
// };
// let saysay = function alertName() {
//     alert(`Hello, ${this.firstName}!`);
// };
// let sayHi = saysay.bind(user); // (*)
// sayHi();
// user = {
//     firstName: "JohnOP",
// };
// setTimeout(sayHi, 1000); // Hello, John!

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword.bind(user);
// askPassword(user.loginOk, user.loginFail);

