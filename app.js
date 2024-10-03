const express = require('express')
const app = express();
const port = 1000;
const bodyparser = require('body-parser')
const cookieparser = require("cookie-parser")
const session = require('express-session')
const flash = require('connect-flash');

//Public file
app.use(express.static('public'));

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.use(cookieparser())
// parse application/json
app.use(bodyparser.json())

app.set('viewengine','ejs')

app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

app.use(flash());
  


app.get("/",(req,res)=>{
    //res.render('footer.ejs',{message : req.flash('success')})
    // res.render('footer.ejs');
    // res.render('layout/header.ejs',{message : req.flash('success',"great")})
    res.render('layout/anya.ejs')
    // req.flash('message',"ok")
    // res.redirect("/showflash");
})

//Public file

app.get("/signin",(req,res)=>{
    res.render('layout/signin.ejs')
    // res.render('layout/header.ejs',{message : req.flash('message')})
    // console.log(req.flash('message'));
    
    //res.send(req.flash('message'));
})



app.listen(port);