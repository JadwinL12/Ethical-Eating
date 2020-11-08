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
const getUserQuery = 'SELECT MAX(username) from user WHERE username=?';
const insertQueryUser = 'INSERT INTO user (`username`, `password`, `recipes`) VALUES (?, ?, ?)';
const updateQueryUser = 'UPDATE user SET username=?, password=?, recipes=? WHERE id=?';
const deleteQueryUser = 'DELETE FROM user WHERE id=?';
const dropTableQueryUser = 'DROP TABLE IF EXISTS user';
const makeTableQueryUser = `CREATE TABLE user(
                        id INT PRIMARY KEY AUTO_INCREMENT,
                        username VARCHAR(10) NOT NULL,
                        password VARCHAR(10) NOT NULL,
                        recipes INT;`;

const getAllData = (res)=>{
    mysql.pool.query(getAllQueryUser, (err, rows, fields)=>{
        if(err){
        next(err);
        return
        }
        res.json({rows: rows});
    });
    };

// home page
app.get('/',(req,res)=>{
    res.render("features/home");
});

// meals page
app.get('/meals', (req,res)=>{
    res.render("features/meals");
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

// login and sign up are below 

// show signUp page
app.get('/signUp', (req,res)=>{
    res.render("features/signUp");
});
// checking to see if signup is valid or if it needs to be redirected
app.post('/signUp',(req,res,next)=>{
    var reg = {username: req.body.username, password: req.body.password, recipes: null};
    var usernameReg = req.body.username;
    console.log(reg, usernameReg)
    mysql.pool.query(getUserQuery, usernameReg, (err, result)=>{
        const returnedPacket = JSON.parse(JSON.stringify(result))
        if(err){
            next(err)
            console.log(err)
            return;
        }else if(returnedPacket[0]["MAX(username)"] == null){
                mysql.pool.query(insertQueryUser, [reg.username, reg.password, reg.recipes],(err, result)=>{
                    if(err){
                      next(err);
                      return;
                    }else{
                        res.render("features/successSignUp");
                    }
                });
        }else{
            // console.log(reg)
            res.render("features/signUp");
        }
  });
});

// show login page
app.get("/login", (req, res)=>{
    res.render("features/login");
});
// login functionality - mysql
app.post('/login', (req, res)=>{
    res.render("features/login");
});


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