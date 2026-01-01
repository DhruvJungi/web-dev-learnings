// object literals
// const student = {
//     name: "Dhruv",
//     age: 20
// };

// post
// const post = {
//     username: "@dhruvjungi23",
//     content: "this is my #firstpost",
//     likes: 150,
//     reposts: 5,
//     tags: ["@jungishaheb","jungi.com"]
// };

// to get the values
// method-1
// post["content"];
// method-2
// post.likes;

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };

// to update the value
// const student ={
    // name: "dhruv",
    // marks: "69",
    // city: "porbandar"
// };

// method to update
// student.city= "vadodara";
// to add new key value pair
// student.gender = "male";
// to remove pair
// delete student.gender;

// object of object
// const classinfo ={
//     dhruv: {
//         age: 20,
//         city: "porbandar"
//     },
//     yug: {
//         age: 19,
//         city: "vadodara"
//     },
//     priyang: {
//         age: 18,
//         city: "rajkot"
//     }
// };

// to get individual value
// classinfo.dhruv;

// to update individual value
// classinfo.dhruv.city = "dubai";

// array of objects
// const classinfo = [
//     {
//         name: "dhruv",
//         age: 20,
//         city: "porbandar"
//     },
//     {
//         name: "yug",
//         age: 19,
//         city: "vadodara"
//     },
//     {
//         name: "priyang",
//         age: 18,
//         city: "rajkot"
//     }
// ];

// to get the object
// classinfo[1];
// to get the object individual value
// classinfo[1].name;
// to update object's individual value 
// classinfo[1].city = "mumbai";

// math object
// Math.PI;
// Math.E;
// Math.abs(12);
// Math.pow(2,2);
// Math.floor(2.6);
// Math.ceil(2.6);
// Math.random();

// random integers
// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);
// num = num + 1;

// Q1 generate random number btn 1 to 100
// Math.floor(Math.random()*100) + 1;
// Q2 '''''' btn 1 to 5
// Math.floor(Math.random()* 5) + 1;
// Q3'''''btn 21 to 25
// Math.floor(Math.random()* 5) + 20;

// guessing game
const max = prompt("enter the maximum number:");

const random = Math.floor(Math.random() * max) + 1;


let guess = prompt("guess the number");
while(true){
    if(guess == "quit") {
        console.log("user quit");
        break;
    }
    if(guess == random) {
        console.log("you guessed right!!!. the random was", random);
        break;
    } else if(guess< random) {
        guess = prompt("hint: your guess was too small. please try again");
    } else{
        guess = prompt("hint: your guess was to large. please try again");
    }
};