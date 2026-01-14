const figlet = require('figlet');

figlet("hello i am D.J.Jungi!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});