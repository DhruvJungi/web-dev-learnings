const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

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
// this was our home route
app.get("/", (req, res) => {
  let q = `SELECT  count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
      // console.log(result.length);
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
  //   res.send("welcome to home page");
});

// show route
app.get("/user", (req, res) => {
  let q = "SELECT * FROM `user`";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      console.log(users);
      res.render("show.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// EDIT route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// update database route
app.patch("/user/:id", (req, res) =>  {
  let { id } = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password) {
        res.send("WRONG password");
      } else{
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query( q2, (err, result) => {
          if(err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

app.listen("3000", () => {
  console.log("server is listening to port 3000");
});

// connection.end();
