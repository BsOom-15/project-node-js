// const fs = require("fs");

// fs.readFile("input.txt", function(err, data){
//     if(err){
//         return console.log(err);
//     }
//     console.log("Asyncronous read:" + data.toString());
// });



// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());

// console.log("Program Ended");



// console.log(__dirname);
// console.log("HI");


function printHello ()
{
    console.log("Hello World");
}

var t = setTimeout(printHello, 2000);

clearTimeout(t)