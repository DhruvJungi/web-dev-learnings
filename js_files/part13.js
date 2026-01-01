// Async function
// async keyword --> it will return promise always
// async function greet() {
//     throw "404 page not found";
//     return "hello";
// }

// greet()
//   .then(() => {
//     console.log("promise was resolved");
//     console.log("result was :", result);
//   })
//   .catch((err) => {
//     console.log("promise was rejected with err:", err);
//   });

// // async with arrow function
// let demo = async () => {
//     return 5;
// };

// await keyword --> 1st call complete then other will be called

// function getNum(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }

// h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       console.log(`color changed to ${color}!`);
//       resolve("color changed!");
//     }, delay);
//   });
// }

// async function demo() {
//   await changeColor("red", 1000);
//   await changeColor("orange", 1000);
//   await changeColor("green", 1000);
//   changeColor("blue", 1000);
// }

// handling reject in promise
// h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 5) + 1;
//       if (num > 3) {
//         reject("promise rejected");
//       }
//       h1.style.color = color;
//       console.log(`color changed to ${color}!`);
//       resolve("color changed!");
//     }, delay);
//   });
// }

// async function demo() {
//   try {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//   } catch (err) {
//     console.log("error was caught.");
//     console.log(err);
//   }
//   let a = 5;
//   console.log(a);
//   console.log("new number = ", a + 3);
// }

// json --> the api return the data in json format

// let jsonRes = '{"fact":"Blue-eyed, white cats are often prone to deafness.","length":50}';
// JSON method-1.JSON.parse --> to parse a string data into a JS object
// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

// JSON method-2.JSON.stringify(json) method --> we will use it when create our own API.

// let student = {
//     name: "dhruv",
//     marks: 95,
// };
// JSON.stringify(student);

// Testing API requests
//1)-->hoppscotch.io
//2)-->postman

// free APIs
// 1)https://dog.ceo/api/breeds/image/random
// 2)https://catfact.ninja/fact

// Ajax--> Asynchronous Js and XML

// HTTP Verbs
// 1)Get - we use it whenever we want some information
// 2)Post - we use it when want to post some data with our API
// 3)delete - we use it when we want to delete some data or anything

// status code
// 1)200 - ok
// 2)404 - Not found
// 3)400 - bad Request
// 4)500 - internal Server Error

// HTTP header
// headers-> supply additional informations

// to call api request we use fetch
// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data2 = ",data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });

//   console.log("i am happy");

// using await in fetch async data
let url = "https://catfact.ninja/fact";
async function getFacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch(e) {
        console.log("error - ", e);
    }
    console.log("bye");
}

