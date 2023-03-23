var express = require('express');
var expressHbs  = require('express-handlebars');

var app = express();
app.listen(8080,()=>{
    console.log("Sever đang chạy !!!");
});

app.use(express.static('css'));
app.use(express.static('js'));

app.engine('.hbs', expressHbs());
app.set('view engine', '.hbs');

app.get('/home', function(req, res){
    res.render('index');
});

app.get('/manager', function(req, res){
    res.render('manager');
});

app.get('/signup', function(req, res){
    res.render('signup');
});

app.get('/manager2', function(req, res){
    res.render('manager2');  // http://localhost:8080/manager2
});


// http://localhost:8080/home
// http://localhost:8080/signup

