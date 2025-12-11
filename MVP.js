const express = require('express')
var app = express()

const articles = require ('./routes/articles');
app.use ('/article', articles);

app.set('view engine', 'ejs');

app.listen(8080)