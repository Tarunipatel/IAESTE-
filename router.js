const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.set('view engine','ejs');

app.get('/',(req,res)=>
{
    res.render('home');
})
app.get('/teams',(req,res)=>
{
    res.render('teams');
})
app.listen(port,(req,res)=>
{
    console.log("Listening on Port "+port);
})
