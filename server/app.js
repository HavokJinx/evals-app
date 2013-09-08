
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
//app.engine('.html', require('jade').__express);
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
// Homepage
//app.use(function(request, response, next) {
// TODO: use jade to render directly the views.
//	if (request.url == "/") {
//		response.writeHead(200, { "Content-Type": "text/plain" });
//		response.end("Welcome to the homepage!\n");
//		// The middleware stops here.
//	} else {
//		next();
//	}
//});
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '../public'));//
app.use(express.static(path.join(__dirname, '../dist')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});