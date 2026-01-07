const express = require("express");
const app = express();
const port = 3000;

// if any there is url encode data the by using the below line express will understand that data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/register",(req, res) => {
    let { user, password } = req.query;
    res.send(`standard GET respone. Welcome ${user}!`);
});

app.post("/register",(req, res) => {
    let { user, password } = req.body;
    res.send(`standard GET respone. Welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});


