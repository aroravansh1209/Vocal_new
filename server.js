const express = require("express")
const app = express()
require('dotenv').config()
const dbConfig = require('./config/dbConfig')
app.use(express.json())
const userRoute = require('./routes/userRoutes')
app.use('/api/users', userRoute)
const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))