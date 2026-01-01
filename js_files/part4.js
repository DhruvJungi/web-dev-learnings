// for loop increment
// for(let i=1; i<=5; i++){
    // console.log(i);
// }

// for loop decrement
// for(let i=5; i>=1; i--){
    // console.log(i);
// }

// print all odd numbers
// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// print all even numbers 
// for(let i=0; i<=15; i=i+2){
    // console.log(i);
// }

// infinite loops
// for(let i=1; ; i++){
    // console.log(i);
// }

// write a table of number given by user 
// let n= prompt("enter the number:");
// n=parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// nested for loop
// for(let i=1; i<=3; i++){
//     console.log(`outer loop ${i}.`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

// while loop
// let i=0;
// while(i<=20){
//     console.log(i);
//     i++;
// }

// 
// guess my favourite car 
// const favcar = "bugatti";
// let guess = prompt("enter the name of my favourite car");

// while( (guess != favcar) && (guess != "quit") ){
//     guess = prompt("you have gussed wrong try again!");
// }

// if(guess == favcar){
//     console.log("congrat's you win");
// } else {
//     console.log("you quit");
// }

// break statement 
// let i=1;
// while(i<=5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// loop in array
// let fruits = ["apple","orange","mango","lichi","guavava"];
// fruits.unshift("pineapple");
// console.log(fruits);
// for (let i=0; i<=fruits.length; i++){
    // console.log(i, fruits[i]);
// }
// loop with nested array
// let a = [
//     ["iroman","spiderman","thor"],
//     ["superman","wonder women","flash"]
// ]

// for(let i=0; i<a.length; i++){
//     console.log(i, a[i], a[i].length);
//     for(let j=0; j<a[i].length; j++){
//         console.log(`j=${j}, ${a[i][j]}`);
//     }
// }

// for of loop
// let fruits =["mango","apple","banana","litchi","orange"];
// for (fruit of fruits) {
//     console.log(fruit);
// }

// for(char of "dhruv jungi"){
//     console.log(char);
// }

// nested for of loop
// let a = [
//     ["iroman","spiderman","thor"],
//     ["superman","wonder women","flash"]
// ]

// for(list of a){
//     for(name of list){
//         console.log(name);
//     }
// }

// let todo = [];
// let req = prompt("please enter your request");
// console.log(req);
// while(true) {
//     if(req == "quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req == "list"){
//         console.log("-------");
//         for (let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("-------");
//     } else if(req == "add"){
//        let task = prompt("please enter the task you want to add"); 
//        todo.push(task);
//        console.log("task added");
//     } else if(req == "delete"){
//         let idx = prompt("please enter the task index");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     } else{
//         console.log("wrong request");
//     }
//     req = prompt("please enter your request");
// }