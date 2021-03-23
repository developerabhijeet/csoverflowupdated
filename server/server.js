const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv  = require('dotenv')
const routeUrls = require('./routes/routes')
const bodyParser = require('body-parser');
const cors = require('cors')
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("database connected successfullly"));

app.use(express.json())
app.use(bodyParser.json());
// app.use(bodyParser.urlencode({
//   extended: true
// }))
app.use(cors())
app.use('/app', routeUrls)
app.listen(4000,()=>console.log("server is running at 4000"))