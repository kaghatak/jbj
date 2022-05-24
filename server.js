const express = require('express')
const app = express()

app.use(express.json())
const studentRouter = require('./routes/students')
app.use('/students', studentRouter)
app.listen(3000, () => console.log("Server Started 123"))