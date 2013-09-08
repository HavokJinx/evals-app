
/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
	app = express(),
			http = require('http'),
			path = require('path'),
			underscore = require("underscore");

app._ = underscore;
var user = require('./routes/user'),
		webTemplates = require('./routes/templates')(app);
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

app.use(app.router);
app.use(require('stylus').middleware(__dirname + '../public'));//
app.use(express.static(path.join(__dirname, '../public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/js/app/templates/(:file).html', webTemplates.index );
console.log( app.routes );

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
