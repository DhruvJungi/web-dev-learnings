// array method
// m1- forEach
// let arr = [1,2,3,4,5];
// let print = function (el) {
//     console.log(el);
// };
// arr.forEach(print);

// for each in objects
// let arr = [
//     {
//         name: "dhruv",
//         marks: 95,
//     },
//     {
//         name: "yug",
//         marks: 58,
//     },
//     {
//         name: "priyang",
//         marks: 32,
//     },
// ];

// arr.forEach((student) => {
//     console.log(student.marks);
// });

// m2- map
// let num = [1,2,3,4];
// let double = num.map((el) => {
//     return el*2;
// });

// m3-filter
// let num = [1,2,3,4,5,6,7,8,9,10];
// let ans = num.filter((el) => {
//     return el % 2 == 0; //even -> true, odd -> false
// });

// m4-every
// [2,4,6].every((el) => el%2 == 0);
// [2,4,6,1].every((el) => el%2 == 0);

// m5-some
// [2,4,6,1].some((el) => el%2 == 0);
// [3,5,7,1].some((el) => el%2 == 0);

// m6-reduce
// let nums = [1,2,3,4];
// let finval = nums.reduce((res, el) => res + el);
// console.log(finval);

// m7- max in reduce
// arr = [1,5,8,3,9,52,14];
// let max = arr.reduce((max,el) => {
//     if(max < el){
//         return el;
//     } else {
//         return max;
//     }
// });
// console.log(max);/

// Q1 check if all numbers in our array are multiples of 10 or not 
// let arr = [10,20,30,40];
// let ans = arr.every((el) => el % 10 == 0);
// console.log(ans);

// Q2 create a function to find the min number in an array
// let nums = [10,20,30,5];
// let min = nums.reduce((min,el) => {
//     if(min < el) {
//         return min;
//     } else {
//         return el;
//     }
// });
// console.log(min);

// default parameter in function 
// function sum(a, b=3) {
//     return a + b;
// }

// spread
// let arr =[1,2,3,4,5,6,0];
// Math.min(...arr); it will tell us the minimum value inside the array

// spread wiyh array literals
// let newarr = [...arr]; // it will store individual character in arr 

// adding two arrays use spread
// let odd =[1,3,5,7,9];
// let even = [2,4,6,8];
// let newarr = [...odd, ...even];

// spreads with object literals
// const data ={
//     email: "dhruvjjungi007@gmail.com",
//     password: "abcd",
// };

// const datacopy = {...data, id: 123, country: "india"};

// to convert array into object
// let arr =[1,2,3,4,5];
// let obj = {...arr};

// rest
// function sum(...arg){
//     for (let i=0; i< arg.length; i++){
//         console.log("you gave us:", arg[i]);
//     }
// }

// function min(a,b,c,d){
//     console.log(arguments);
// }

// destruct-> storing values of array into multiple variable

// let names = ["dhruv","yug","priyang","burhan","dhwanik"];
// let [winner, runnerup, ...others] = names;
// console.log(winner,runnerup,...others);

// destruct in objects
const student = {
    name: "dhruv",
    age: 20,
    class: 3,
    subjects: ["hindi","english","math","science"],
    username: "dhruv@123",
    password: "abcd"
};

// let {username, password }= student;
// if we want to store the value in other variable then
let {username: user, password: secret, city: place = "porbandar" } = student;
