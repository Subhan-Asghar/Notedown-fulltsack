const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//Mogoose
mongoose.connect('mongodb://127.0.0.1:27017/note')
  .then(() => console.log('Connected!'));
app.get('/', (req, res) => {
  res.send('Hello Worl!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})