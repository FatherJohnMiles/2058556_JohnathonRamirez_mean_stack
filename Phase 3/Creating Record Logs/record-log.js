console.log("Welcome to record log")

let readline = require("readline-sync");
let fname = readline.question("Enter your first name:");
let lname = readline.question("Enter your last name:");
let gender = readline.question("Enter your gender:");
let email = readline.questionEMail("Enter your email:");
let date = new Date();

console.log("Your first name is:" +fname);
console.log("Your last name is:" +lname);
console.log("Your gender is:" +gender);
console.log("Your email id is:" +email);
console.log("time and date entry:" +date);


let fs = require("fs")
//let newusers = [];
let userinfo = ({fname, lname, gender, email, date});
// newusers.push(userinfo);

// let userinfostring = JSON.stringify(newusers)
// fs.writeFileSync("usersInfo.json", userinfostring);
// console.log("Data stored in file")

let newinfo = JSON.parse(fs.readFileSync("usersInfo.json").toString());
newinfo.push(userinfo)
fs.writeFileSync("usersInfo.json", JSON.stringify(newinfo));
console.log("New stored")


