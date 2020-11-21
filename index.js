const express = require('express');
const mysql = require('./dbcon');
const CORS = require('cors'); 
const cookieParser = require("cookie-parser");
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const session = require("express-session");
const request = require("request");
const app = express();
app.set('port', 1738);
app.use(CORS());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//set view engine
app.set("view engine", "ejs");
//linking main.css
app.use(express.static(__dirname + "/public"));
app.use('/img', express.static(__dirname + '/Images'));
// app.use(express.urlencoded({ extended: false }));
const getAllQueryUser = 'SELECT * FROM user';
const getUserQueryUsername = 'SELECT MAX(username) from user WHERE username=?';
const getUserQueryUandP = 'SELECT username,password from user WHERE username=? and password=?';
const insertQueryUser = 'INSERT INTO user (`username`, `password`, `recipes`) VALUES (?, ?, ?)';

// home page
app.get('/',(req,res)=>{
    res.render("features/home");
});

// ingredients page
app.get('/ingredients',(req,res)=>{
    res.render("features/ingredients");
});

// ethics page
app.get('/ethics',(req,res)=>{
    res.render("features/ethics");
});

// saved ingredients
app.get('/savedRecipes', (req,res)=>{
    res.render("features/savedRecipes");
});

// build a recipe
app.get('/buildYourOwn', (req,res)=>{
    res.render("features/buildYourOwn");
});

// login and sign up are below 

// show signUp page
app.get('/signUp', (req,res)=>{
    res.render("features/signUp");
});
// checking to see if signup is valid or if it needs to be redirected
app.post('/signUp',(req,res,next)=>{
    var reg = {username: req.body.username, password: req.body.password, recipes: null};
    var usernameReg = req.body.username;
    mysql.pool.query(getUserQueryUsername, usernameReg, (err, result)=>{
        const returnedPacket = JSON.parse(JSON.stringify(result))
        if(err){
            next(err)
            console.log(err)
            return;
        }else if(returnedPacket[0]["MAX(username)"] == null){
                mysql.pool.query(insertQueryUser, [reg.username, reg.password, reg.recipes],(err)=>{
                    if(err){
                      next(err);
                      return;
                    }else{
                        res.render("features/successSignUp");
                    }
                });
        }else{
            res.render("features/signUp");
        }
  });
});

// show login page
app.get("/login", (req, res)=>{
    res.render("features/login");
});
// login functionality - mysql
app.post('/login', (req, res, next)=>{
    var username = req.body.username;
    var password = req.body.password;
    mysql.pool.query(getUserQueryUandP, [username, password], (err, result)=>{
        if(err){
            next(err)
            return;
        }else{
            if(result.length >0){
                res.render("features/home")
            }else{
                res.render("feature/login")
            }
        }
})});


app.use((req,res)=>{
    res.status(404);
    res.send('404');
    });
    
app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500);
    res.send('500');
});

app.listen(1738,()=>{
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
