var express = require('express');
var app = express();
var path = require('path');
//requiring the view engine
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
//setting up the engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


//ROUTERS
app.get('/', function(req, res){
    res.render('index');
});
app.get('/meadowlark.com', function(req, res){
    res.redirect(303, '/');
})

//Middlewares
app.use(express.static(path.join(__dirname, 'Public', 'CSS')));
app.use(express.static(path.join(__dirname, 'Public', 'downloads')));
app.use(express.static(path.join(__dirname, 'Public', 'script')));

//Server Port
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function()
            {
                console.log("The server is running at port " + app.get('port'));
            });