const express = require('express')
const app = express();

// app.get('', (req,res)=>{
//     // console.log("Data from browser", req.query.name)
//     res.send(`
//         <h1>Hello, this is Home page</h1>
//         <br>
//         <a href="/about">Go to About</a>
//     `)
// })

// app.get('/about', (req,res)=>{
//     res.send(`
//         <h1>About Page</h1>
//         <input type="text" placeholder="Username" value="${req.query.name}" />
//         <br>
//         <button>Click me</button>
//         <br>
//         <a href="/">Go to home page</a>
//     `)
// })

// app.get('/help', (req,res)=>{
//     res.send([
//         {
//             name:"Manoj",
//             email:"manoj@gmail.com"
//         },
//         {
//             name:"Aditya",
//             email:"aditya@gmail.com"
//         }
//     ])
// })

app.listen(5000)

