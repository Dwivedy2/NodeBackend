require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("omkareshwarnath.com")
})

app.get('/login', (req, res) => {
    res.send('<h1>you are not signed up, please sign up</h1>')
})

app.get('/youtube', (req, res) => {
    res.send(`<a href="https://www.youtube.com/watch?v=pOV4EjUtl70&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&index=2">Youtube Link</a>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
