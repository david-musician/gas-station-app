var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Screen scraping dependencies
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var index = require('./app_api/routes/index');
//var users = require('./app_api/routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'app_api', 'views'));
// app.set('view engine', 'angular');

// icon from https://www.iconfinder.com/icons/111078/gas_icon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));

app.use('/', index);
//app.use('/users', users);

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

/* When the app is finished and you want to minify a bunch of files,
   uncomment this code and follow this format
   Reference chaper10_reference

var appClientFiles = [
  'app_client/app.js',
  'app_client/home/home.controller.js',
  'app_client/about/about.controller.js',
  'app_client/locationDetail/locationDetail.controller.js',
  'app_client/reviewModal/reviewModal.controller.js',
  'app_client/common/services/geolocation.service.js',
  'app_client/common/services/loc8rData.service.js',
  'app_client/common/filters/formatDistance.filter.js',
  'app_client/common/filters/addHtmlLineBreaks.filter.js',
  'app_client/common/directives/navigation/navigation.directive.js',
  'app_client/common/directives/footerGeneric/footerGeneric.directive.js',
  'app_client/common/directives/pageHeader/pageHeader.directive.js',
  'app_client/common/directives/ratingStars/ratingStars.directive.js'
];
var uglified = uglifyJs.minify(appClientFiles, { compress : false });

fs.writeFile('public/angular/loc8r.min.js', uglified.code, function (err){
  if(err) {
    console.log(err);
  } else {
    console.log("Script generated and saved:", 'loc8r.min.js');
  }
});

*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log('Here I am1!')
// Screen scraping code
// https://scotch.io/tutorials/scraping-the-web-with-node-js
app.get('/prices', function(req, res){
  console.log("I am running");
  // site we're scraping
  url = 'http://www.imdb.com/title/tt1229340/';
  
  request(url, function(error, response, html){
    if(!error){
      // use Cheerio to bring in jQuery on HTML
      var $ = cheerio.load(html);
      
      // Declare variables
      var title, release, rating;
      var json = { title : "", release : "", rating : ""};
      
      // Find tags
      $('.header').filter(function(){
        // Store data
        var data = $(this);
        
        // GET title and store it
        title = data.children().first().text();
        
        // GET release year and store it
        release = data.children().last().children().text();
        
      })
      $('.star-box-giga-star').filter(function(){
        var data = $(this);
        // GET movie rating and store it - - - ratingValue
        rating = data.text();
        
        // Store as a JSON object
        json.title = title;
        json.release = release;
      })
    }
    // Write the output to a file
    fs.writeFile('output.json',JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })
  })
});

console.log('Here I am!')

app.listen('8081')
console.log('Magic happens on port 8081');

module.exports = app;
