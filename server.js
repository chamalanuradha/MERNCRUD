const express = require("express");
const {mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
//route middleware
app.use(postRoutes);

const PORT =8000;
const DB_URL= 'mongodb+srv://chamal98:chamal123@mern.azduptz.mongodb.net/MERNCRUD?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);
mongoose.connect(DB_URL)
.then(()=>{
  console.log("DB connected")
})
.catch((err) =>console.log("DB not connected",err));
app.listen(PORT,()=>{
    console.log(`App is run on ${PORT}...`)
})