const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "123456",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Inserting New Data
// let q = "INSERT INTO user (id, username, email, password) VALUES ?"; //(?, ?, ?, ?) when we add single entry

// let  data = [];
// for(let i =1; i<=100; i++){
//     data.push(getRandomUser()); //100 fake users
// }
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
// let users = [
//     ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//     ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];

//user
// try {
//     connection.query( q , [data] , (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         // console.log(result.length);
//     });
// } catch (err) {
//     console.log(err);
// }

// connection.end();

// let createRandomUser = () => {
//     return {
//         userId: faker.string.uuid(),
//         username: faker.internet.username(),
//         email: faker.internet.email(),
//         avatar: faker.image.avatar(),
//         password: faker.internet.password(),
//         birthdate: faker.date.birthdate(),
//         registeredAt: faker.date.past()
//     };
// };

// console.log(createRandomUser());
app.get("/", (req, res) => {
  let q = `SELECT  count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0] ["count(*)"];
      res.render("home.ejs", { count });
      // console.log(result.length);
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
//   res.send("welcome to home page");
});
app.listen("3000", () => {
  console.log("server is listening to port 3000");
});

// connection.end();
