var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 

app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response) {
    response.render('index');
})

app.get('/cat', function(request, response) {
    response.render('cat');
})

app.get('/car', function(request, response) {
    response.render('car');
})

app.listen(8000, function() {
    console.log("server is running");
})
