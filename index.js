const express = require("express");          //يتم استدعاء framewor express


const app = express();   
app.use(express.json());

app.get("/hello", (req, res)=>{
    res.send("hello");
});
// يقوم هذا الكود بعمل request للبيانات التي يحتاجها ال clinet
// وعندها يتم تنفيذ وظيفة المعالج. 
// المقصود : عندما يذهب المتصفح الى (GET) يقوم ال(Server) بتنفيذ ال(Send)


app.get("/", (req, res)=>{
    res.send("Hello In My Node Project");
});


app.get("/hi", (req, res)=>{
    // res.send("You Visited HI");
    // res.sendFile(__dirname + "/Views/numbers.html");  // we using this code if we have html file.
    // to write html file and node js file we using  EJS:-
    res.render("numbers.ejs", {
        name: "BsOom"
    });
});




app.get("/numbers", (req, res)=>{
    let numbers = "";
    for (let i = 0; i<=100; i++){
        numbers += `number ${i} - `
    }   
    res.send(`Your Number Is:${numbers}`)
});




app.get("/findSummation/:number1/:number2", (req, res)=>{
    // if add (:) this is meaning Is a Var.
    const num1 = req.params.number1;
    const num2 = req.params.number2;
    const total = Number (num1) + Number (num2);
    res.send(`the total is: ${total}`);
});




app.get("/sayHello", (req, res)=>{
    // if need use body params you should using somethings:
    // you must add: app.use(express.json()) 
    // console.log(req.body);
    // console.log(req.query);
    // res.send(`Hello ${req.body.name} Age Is: ${req.query.age} `);

    res.json({
        name: req.body.name,
        age: req.query.age,
        languagh: "Engilsh"
    })
});


app.put("/test", (req, res)=>{
        res.send("You Visited test")
    });


app.delete("/deleteTesting", (req, res)=>{
        res.send("You Are Delete response");
    });

app.listen(3000,()=>{
    console.log("i am listen port 8001");
})