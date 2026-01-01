// let btns = document.querySelectorAll("button");
// console.dir(btns);
// // btn.onclick = function () {
// //     alert("button was clicked");
// // };
// for (btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onclick = sayName;
//     // btn.onmouseenter = function () {
//     //     console.log("you entered a button");
//     // };
//     // console.dir(btn);

//     // event listener--> multiple function can work together
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function () {
//         console.log("you double clicked me");
//     });
// }

// function sayHello() {
//     alert("hello");
// }
// // btn.onclick = sayHello;
// function sayName() {
//     alert("Apna College");
// }

// // event listener

// let p = document.querySelector("p");
// p.addEventListener("click", function (){
//     console.log("para was cilcked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function (){
//     console.log("mouse inside div");
// });

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click", function (){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

// keyboard Event
// let btn = document.querySelector("button");
// btn.addEventListener("click", function (event){
//     console.log(event);
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");
// addEventListener("keydown", function () {
//     console.log("key was pressed");
// });

// addEventListener("keyup", function () {
//     console.log("key was released");
// });

// addEventListener("keydown", function (event) {
//     console.log("key = ", this.event.key);
//     console.log("code = ", event.code);
//     console.log("key was pressed");
// });

// inp.addEventListener("keydown", function (event) {
//     console.log("code = ", event.code);
//     if (event.code == "keyU") {
//         console.log("character moves up");
//     } else if (event.code == "KeyD") {
//         console.log("character moves down");
//     } else if (event.code == "KeyR") {
//         console.log("character moves right");
//     } else if (event.code == "KeyL") {
//         console.log("character moves left");
//     }
// });
// form event --> to submit the form 
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault(); //after submitting the form it be still in the same page
//     console.log("form submitted");
// });

// extracting data from forms 
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.dir(form);
//     // let user = this.querySelector("#user");
//     // let pass = this.querySelector("#pass");
//     let user = this.elements[0];
//     let pass = this.elements[1];
//     console.log(pass.value);
//     console.log(user.value);
//     alert(`hi ${user.value}, your password is set up to ${pass.value}`);
// });

// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("changed", function (){
//     console.log("change event"); // it only track the final value only
//     console.log("final value = ", this.value);
// });

// user.addEventListener("input", function (){
//     console.log("input event"); // it only track the final value only
//     console.log("final value = ", this.value);
// });

// let inp = document.querySelector("#text");
// let p =document.querySelector("p");
// inp.addEventListener("input", function() {
//     console.log(inp.value);
//     p.innerText = inp.value;
// });