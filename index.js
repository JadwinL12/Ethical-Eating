var express = require('express');
var mysql = require('./dbcon.js');
var CORS = require('cors'); 

var app = express();
app.set('port', 1738);
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(CORS());

const getAllQueryUser = 'SELECT * FROM user';
const getUserQuery = 'SELECT max(username) from user WHERE username=?';
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
// show signUp page
app.get('/signUp', (req,res)=>{
    res.render("views/features/signUp");
});
// checking to see if signup is valid or if it needs to be redirected
app.post('/signUp',function(req,res,next){
    var {username, password, recipe} = req.body;
    mysql.pool.query(getUserQuery, [username], (err, result)=>{
        if(err){
            next(err)
            return;
        }else if(result=='NULL'){
            mysql.pool.query(insertQueryUser, [username, password, recipes],(err, result)=>{
                if(err){
                  next(err);
                  return;
                }else{
                    res.render("views/features/login");
                }
            });
        }else{
            res.render("views/features/signUp");
        }
  });
});

// show login page
app.get("/login", (req, res)=>{
    res.render("views/features/signUp");
});


app.use(function(req,res){
    res.status(404);
    res.send('404');
    });
    
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.send('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://flip2.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});