const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Yug",
        to: "Priyang",
        msg: "chal olu kharav pabari",
        created_at: new Date(),
    },
    {
        from: "Priyang",
        to: "Dhyey",
        msg: "Dhyey ne ke kharave",
        created_at: new Date(),
    },
    {
        from: "Dhyey",
        to: "Priyang",
        msg: "hu su kam kharavu tu kharav",
        created_at: new Date(),
    },
    {
        from: "Dhruv",
        to: "Priyang",
        msg: "chal pabari tu kharav",
        created_at: new Date(),
    },

];
Chat.insertMany(allChats);