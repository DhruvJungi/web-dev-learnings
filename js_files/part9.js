// dom - document object model

// to change the title text from spider-man to peter parker --> it will work on console
// window
// console.dir(document);
// console.dir(document.all);
// console.dir(document.all[8]);
// console.dir(document.all[8].innerText);
// console.dir(document.all[8].innerText = "Peter Parker");

// getElementById --> it will give us object on the basics of id after that we can manipulate it 
// document.getElementById(mainImg);
// document.getElementById("mainImg");
// let imgobj = document.getElementById("mainImg");
// imgobj
// console.log(imgobj);
// console.dir(imgobj);
// imgobj.src;
// imgobj.src = "/webPractice/js_files/creation_1.png";

// getElementByClass --> we can access the element of the object 
// document.getElementsByClassName("oldImg");
// document.getElementsByClassName("oldImg")[0];

// we will store all the image and iterate it one by one
// let smallImages = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImages.length; i++){
//     console.dir(smallImages[i].src);
// };

// getElementByTagName --> it will returns the element as an html collection
// document.getElementsByTagName("p");
// document.getElementsByTagName("p")[1].innerText = "abcd";

// query selectors --> allows us to use any CSS Selector
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("div a"));

// to get all the anorcher tags 
// console.dir(document.querySelectorAll("div a"));

// using Properties and methods

// P1 - innerText
// let para = document.querySelector("p");
// para;
// console.dir(para);
// para.innerText; // P1 - innerText it show what text is on frontend
// para.innerHTML; //p2-innerHTML it will show text with tags 
// para.textContent; //p3-textContent --> it will show the actual that was inside the tag in html file
//  to manuplate
//para.innerText = "abc";
//para.innerText = "hi, i am parker"; //it will change the text
//para.innerHTML = "hi, <b> i am parker </b>"; //it will convert into bold text

// manipulating attributes
// Obj.getAttribute(arr)
// Obj.setAttribute(Attr, val)
// let img = document.querySelector("img");
// img;
// img.getAttribute("id");
// img.setAttribute("id","spidermanImg"); we had change the id of the image


// manipulating style
// let img = document.querySelector("img");
// console.dir(img);
// img.style
// let heading = document.querySelector("h1");
// heading.style;
// heading.style.color = "purple";
// heading.style.backgroundColor = "yellow";

// let links = document.querySelectorAll(".box a");
// for(link of links){
//     link.style.color = "purple" // the link color will be purple (in-line css)
// }

// classlist --> we add class in any object
// let heading = document.querySelector("h1");
// heading.classList;
// heading.classList.add("abc");
// heading.classList;

// let heading = document.querySelector("h1");
// heading.classList;
// heading.classList.add("green"); // the h1 tag content will be in green color
// to remove
// heading.classList.remove("green");

// navigation
// parent Element --> children --> previous/next  Element Sibling
// let h4 = document.querySelector("h4")
// h4.parentElement; //it will return the parent tag of h4
// box.children //it will show us the child of parent tag
// box.childElementCount //it will tell us no of child
// ul.children[2].previousElementSibling;
// ul.children[1].nextElementSibling;

// Adding Elements in dom
// document.createElement("p"); // it will add new para in file
// let newp = document.createElement("p");
// console.dir(newP);
// newP.innerText = "hi, i am dhruv";
// console.dir(newp);
// to add new thing we use appened
// let box = document.querySelector(".box");
// box.appendChild(newp); //the newp will be inside box tag

// append --> we can add string or new text
// prepend --> it will add at the starting point 
// insertAdjacent --> we can add anything at anywhere

// removing Element
// removeChild
// remove 

// Q1
let para = document.createElement("p");
para.innerText = "Hey I'm red";
document.querySelector("body").append(para);
para.classList.add("red");


let head = document.createElement("h3");
head.innerText = "hi i am h3 tag in blue";
document.querySelector("body").append(head);
head.classList.add("blue");


// document.querySelector("body").removeChild(head); //to remove h3 tag

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para1 = document.createElement("p");

h1.innerText = "i'm in a div";
para1.innerText  = "ME TOO!";

div.append(h1);
div.append(para1);
div.classList.add("box");

document.querySelector("body").append(div);


