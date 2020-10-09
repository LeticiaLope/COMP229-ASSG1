/*process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express.js'); 


var app = express(); 

app.listen(3000); 

module.exports = app; 


console.log('Server running at http://localhost:3000/');*/
//const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

//http.createServer((req, res) => {

app.get('/', (req, res) => {


   //res.writeHead(200, {

    res.send('hello you world');

  // res.end('Hello World');

//}).listen(3000);
});



app.get('/home', (req, res) => {
    res.send('Welcome to my home page');
});

app.get('/aboutme', (req, res) => {
    res.send('Here you will find info about me');
});

app.get('/projects', (req, res) => {
    res.send('This are some of my projects');
});

app.get('/services', (req, res) => {
    res.send('This are some of my services');
});

app.get('/contact', (req, res) => {
    res.send('This is my contact info');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
