var express = require('express');
var mysql = require('./dbcon.js');
var CORS = require('cors'); 

var app = express();
app.set('port', 1738);
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(CORS());

const getAllQueryUser = 'SELECT * FROM user';
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
    