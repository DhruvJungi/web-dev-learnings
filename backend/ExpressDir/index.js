const express = require("express");
const app = express();

// console.dir(app);

let port  = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
// this will only response to the route which exist 
app.get("/", (req, res) => {
    res.send("hello you contracted root path");
});
app.get("/apple", (req, res) => {
    res.send("you contracted apple path");
});
app.get("/orange", (req, res) => {
    res.send("you contracted orange path");
});

// to get path parameter
app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    // res.send("hello, i am root");

    // it will return the username also
    // let {username, id } = req.params;
    // res.send(`welcome to the page of @${username}.`);

    // to send htmlcode
    let {username, id } = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>`
    res.send(htmlStr);
});

// it is use for query string 
app.get("/search", (req, res) => {
    // console.log(req.query);
    // res.send("no results");

    // it will display the query also
    let {q} =req.query;
    if(!q){
       res.send("<h1>nothing searched</h1>"); 
    }
    res.send(`search results for query: ${q}`);
});
// this will accept the route that does not even exist 
// app.get('*' , (req, res) => {
//     res.send("this path does not exist");
// });

app.post("/", (req, res) => {
    res.send("you sent a post request to root");
});

// it listen all the request 
// app.use((req, res) => {
//     console.log("request received");
//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // });

//     // in html form
//     let code = "<h1>fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// });