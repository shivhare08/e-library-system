const express = require('express')
const app = express();
const port = 1000;
const bodyParser = require('body-parser')
const cookieparser = require("cookie-parser")
const session = require('express-session'); 
const flash = require('connect-flash'); 
// const flash = require('express-flash')
const mongoose = require('mongoose');
const router = require('./route/web');

app.use(cookieparser());

//=====session message==========\\
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    
  }));

//=======flash message=========\\
app.use(flash());

app.use(express.json())

//Public file
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',router);


mongoose.connect("mongodb+srv://shivhares2002:mww8frbY4dnHF92a@cluster0.gq0hu.mongodb.net/e-library");

app.set('viewengine','ejs')

app.listen(port);