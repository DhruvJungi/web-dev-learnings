// "this" is use when the function is defined inside the object and we have to take the values of the variable that also declare inside the same function
// this is use when we create a object and we want to use the properties of that object then we use "this."
// const student = {
//     name: "dhruv",
//     age: "20",
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// try and catch
// try {
//     console.log(a);
// } catch(err) {
//     console.log("caught an error.. a is not defined");
// }

// arrow function
// const sum = (a,b) => {
//     console.log(a+b);
// };

// const cube = a => {
//     return a*a*a;
// };/

// arrow function with implicit return
// const mul = (a, b) => (
//     a*b
// ); 

// timeout function
// console.log("hi there!");
// setTimeout( () => {
//     console.log("Dhruv Jungi")
// }, 4000);
// console.log("Welcome to");

// set interval function
// setInterval( () => {
//     console.log("Dhruv Jungi")
// }, 2000);
// to stop the set interval
// let id = setInterval( () => {
//     console.log("Dhruv Jungi")
// }, 2000);

// clearInterval(id);

// this with arrow functions - lexical scope is there
// const student = {
//     name: "dhruv",
//     marks: 95,
//     prop: this, //global scope
//     getName: function () {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this); //parent's scope -> window
//         return this.marks;
//     },
//     getInfo1: function (){
//         setTimeout(() => {
//             console.log(this);//student
//         }, 2000);
//     },
//     getInfo2: function() {
//         setTimeout(function() {
//             console.log(this);//window
//         }, 2000);
//     },
// };

// Q1 write a arrow function that returns the square of a number 'n'.
// const square = (n) => {
//     return n*n;
// }  

// Q2 write a function that prints "hello world " 5 times at intervals of 2s each.
// let id = setInterval(() => {
//         console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
// }, 10000);