// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 4000;

// database connection
const connect = () => {
    mongoose
      .connect(process.env.MONGO)
      .then(() => {
        console.log("connected to db");
      })
      .catch((err) => {
        throw err;
      });
  };

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session({
    secret: "my secret key",
    saveUninitialized:true,
    resave:false
}))
app.use((req,res, next)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})

// set template engine
app.set('view engine', 'ejs');

//route prefix
app.use("", require("./routes/routes"))
app.use(express.static('public'));
app.get('/', (req,res)=>{
    res.send("Hello World");
});

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})