// create function
// function hello(){
//     console.log("hello Dhruv");
// }; 
// function call
// hello();

// loop in function
// function print1to5() {
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }

// print1to5();

// if-else in function
// function isAdult(){
//     let age = 18;
//     if(age>=18){
//         console.log("Adult");
//     } else{
//         console.log("teenage");
//     }
// }

// isAdult();

// Q1 craete a function that prints a poem.
// function printPoem(){
//     console.log("twinkle twinkle, little star");
//     console.log("how i woulder what you are");
// }
// printPoem();

// Q2 create a function to roll a dice & always display the value of the dice (1 to 6)
// function rollDice(){
//     let a = Math.floor(Math.random()*6) + 1;
//     console.log(a);
// }
// rollDice();

// function with argument
// function printName(name,age){
//     console.log("my name is ",name);
//     console.log("my age is ",age);
//     // method 2
//     console.log(`my name is ${name} and my age is ${age}`);
// }
// printName("dhruv",20);
// printName("yug");

// sum of two numbers 
// function sumOf(a, b){
//     console.log(`sum of ${a} + ${b} = `,a+b);
// }
// sumOf(5,6);
//
// Q3 create a function to calculate the average of 3 numbers
// function average(a,b,c){
//     console.log(`The average is `,(a+b+c)/3);
// }
// average(3,4,5);

// Q4 create a function that prints the multipilcation table of any number
// function table(a){
//     for(let i=a; i<=a*10; i+=a){
//        console.log(i); 
//     }
// }
// table(5);

// return value in function
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2));
// console.log(sum(sum(1,2),3));

// create a function that returns the sum of numbers from 1 to n.
// function getSum(n){
//     let sum = 0;
//     for (i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log(getSum(3));

// Q6 create a function that returns the concantenation of all strings in a array

// let str = ["hello","my","name","is","dhruv"];
// function concat(str) {
//     let result = " ";
//     for(let i=0; i<str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }

// concat(str);

// scope - accessibility of variable
// three types of scope function,block,lexical and global
// let sum = 54; //global scope
// function calSum(a, b){
//     let sum = a+b; //function Scope
//     console.log(sum);
// }
// calSum(1,2);
// console.log(sum);

// block scope
// for(let i=1; i<=5; i++){
//     console.log(i); //block scope
// }
// console.log(i); // it will give error because it canot access the element outside the block

// lexical scope--> nested function
// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunction() {
//         console.log(x)
//     }
//     innerFunction();
// }
// outerFunc();

// function expression
// const sum = function(a, b){
//     return a + b;
// }
// sum(2,3);

// let hello = function(){
//     console.log("hello");
// }

// higher order functions
// function multiGreet(func, count){ //higherorder function
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }
// multiGreet(greet, 10);

// higher order functions return a function 
// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         let odd = function(n) {
//             console.log(!(n%2 == 0 ));
//         }
//         return odd;
//     } else if(request == "even") {
//         let even = function(n) {
//             console.log(n%2 == 0);
//         }
//         return even; 
//     } else {
//         console.log("wrong request");
//     }
// }

// let request = "odd";
// let func = oddOrEvenFactory(request);
// func(3);


// methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};

console.log(calculator.add(3,4));
console.log(calculator.sub(3,4));
console.log(calculator.mul(3,4));