const express = require('express')
const cors=require('cors')
const mongoose = require('mongoose');
const router=require('./routes/note-route')
const app = express()
const port = 3000

//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//CORS
app.use(cors())

//Mogoose
mongoose.connect('mongodb://127.0.0.1:27017/note')
  .then(() => console.log('Connected!'));

//Router
app.use('/',router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})