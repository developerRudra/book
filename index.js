const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()

app.use(cors())

mongoose.connect('mongodb+srv://rudra:HplXPShQw2AnauNx@cluster0.ynyguud.mongodb.net/New%20Project')
  .then(() => console.log('Connected!'));

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use("/api",require("./src/routers/userRoute"))
app.use("/api",require("./src/routers/addreshRoute"))
app.use("/api",require("./src/routers/cartRoute"))
app.use("/api",require("./src/routers/bookRoute"))

app.listen(3000)