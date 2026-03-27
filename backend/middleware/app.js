const express =  require('express');
const app = express();

// app.use( (req, res, next) => {
//     // let { query } = req.query;
//     // console.log(query);
//     console.log("hi i am 1st middleware ");
//     // res.send("middleware finished");

//     // using next function
//     next();
// });

// app.use( (req, res, next) => {
//     console.log("hi i am 2nd middleware ");
//     next();
// });

// app.use("/api", (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         console.log("access granted");
//         return next();
//     }
//     res.send("access denied");
// });

// app.get("/api", (req, res) => {
//     res.send("data");
// });

const checktoken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        console.log("access granted");
        return next();
    }
    res.send("access denied");
};

app.get("/wrong", (req, res) => {
    abcd = abcd;
});

app.get("/api", checktoken, (req, res) => {
    res.send("data");
});

// app.get("/random", (req, res) => {
//     res.send("this is a random page")
// });

// logger -morgan
// app.use((req, res, next ) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.time);
//     next();
// });

// 404
// app.use((req, res, next) => {
//     res.status(404).send("page not found");
// });

app.get("/", (req, res) => {
    res.send("hi i am root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page")
})

app.listen(3000, () => {
    console.log("server listening on port 3000");
});