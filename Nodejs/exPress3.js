const express = require('express')
const reqFilter = require('./middleware')
const app = express()
const route = express.Router()

// Application level middleware
// app.use(reqFilter)

route.use(reqFilter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Route level middleware
// app.get('/about', reqFilter, (req, res) => {
//     res.send('Welcome to About Page')
// })


app.get('/about', (req, res) => {
    res.send('Welcome to About Page')
})

// Using route level middleware with route to DRY of reqFilter in different routes
route.get('/help', (req, res) => {
    res.send('Welcome to Help Page')
})

route.get('/contact', (req, res) => {
    res.send('Welcome to Contact Page')
})

app.use('/', route)

app.listen(3000)