const express = require('express')
var app = express()

const articles = require ('./routes/articles');
app.use ('/article', articles);

app.listen(8080)