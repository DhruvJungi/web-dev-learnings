const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);
// inserting single value
// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 48,
// });

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// insert many
// User.insertMany([
//     { name: "Tony", email: "tony@gmail.com", age: 50 },
//     { name: "Peter", email: "peter@gmail.com", age: 30 },
//     { name: "Bruce", email: "bruce@gmail.com", age: 47 },
// ]).then((res) => {
//     console.log(res);
// });

// to find value
// to find with id we can use findByid("id") ex - findByid('6980af724e1f1099a3d61519')
// User.findOne({age: {$gt: 47}})
//     .then((res) => {
//         // it will give every value when we use find()
//         console.log(res);
//         // it will give the name
//         // console.log(res[0].name); 
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// to update the value
// update one
// User.updateOne({name: "Bruce"}, {age: 49})
// update many
User.updateMany({age: {$gt: 48} }, {age: 55})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });