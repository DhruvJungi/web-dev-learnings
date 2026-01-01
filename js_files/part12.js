// call stack
// function hello() {
//     console.log("we are in hello function.");
//     console.log("hello");
// }

// function demo() {
//     console.log("we are in demo function.");
//     hello();
// }

// console.log("we are now calling demo function.");
// demo();
// console.log("all function run succesfully");

// vizualizing the call stack
// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// breaking points--> by adding it, it will tell us that how does the function works

// js is single threaded language--> only one work can be done at a time
// setTimeout(()=>{
//     console.log("apna college");
// },2000);
// console.log("hello");

// callback hell -> callbacks nesting

// h1 = document.querySelector("h1");
// function changeColor(color,delay,nextColorchange){
//     setTimeout(()=>{
//        h1.style.color = color;
//        if (nextColorchange) nextColorchange();
//     }, delay);
// }
// changeColor("red", 1000, () =>{
//     changeColor("orange", 1000, ()=> {
//         changeColor("green",1000, ()=> {
//             changeColor("yellow",1000, () =>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });

// promises--> success or failure
// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }
// savetoDb(
//   "dhruv",
//   () => {
//     console.log("success: your data was saved ");
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("success2: data2 saved");
//         savetoDb(
//           "hello ji",
//           () => {
//             console.log("success3: data3 saved");
//           },
//           () => {
//             console.log("failure3 : weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure: weak connection. data not saved");
//   }
// );


// promise is object there are two things in promise
// 1 - resolve -> success
// 2 - reject -> failure

// savetoDb(
//   "dhruv",
//   () => {
//     console.log("success: your data was saved ");
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("success2: data2 saved");
//         savetoDb(
//           "hello ji",
//           () => {
//             console.log("success3: data3 saved");
//           },
//           () => {
//             console.log("failure3 : weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure: weak connection. data not saved");
//   }
// );

// function savetoDb(data) {
//   return new Promise((resolve,reject)=> {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         resolve("success: data was saved");
//     } else {
//         reject("failure: data was not saved");
//     }
//   });
// }

// there ar 2 methods in promises 1-then and 2-catch
// savetoDb("dhruv jungi")
//     .then(() => {
//         console.log("promise was resolved");
        
//     })
//     .catch(() => {
//         console.log("promise was rejected");
        
//     });

// promise chaining
// savetoDb("dhruv jungi")
//     .then(() =>{
//         console.log("data1 saved.");
//         return savetodb("helloworld");
//     })
//     .then(() =>{
//         console.log("data2 saved");
//         return savetoDb("dhruv");
//     })
//     .then(() =>{
//         console.log("data3 saved");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });

// results and error
// savetoDb("dhruv jungi")
//     .then((result) =>{
//         console.log("data1 saved.");
//         console.log("result of promise: ",result);
//         return savetodb("helloworld");
//     })
//     .then((result) =>{
//         console.log("data2 saved");
//         console.log("result of promise: ",result);
//         return savetoDb("dhruv");
//     })
//     .then((result) =>{
//         console.log("data3 saved");
//         console.log("result of promise: ",result);
//     })
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log("result of promise: ",error);
//     });

// refactoring promises
h1 = document.querySelector("h1");
function changeColor(color,delay) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
        h1.style.color = color;
        resolve("color changed!"); 
    }, delay);
    });
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was completed");
})

// changeColor("red", 1000, () =>{
//     changeColor("orange", 1000, ()=> {
//         changeColor("green",1000, ()=> {
//             changeColor("yellow",1000, () =>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// }); 