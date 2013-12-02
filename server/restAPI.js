var restify = require('restify')
		, userSave = require('save')('user')
		, server = restify.createServer({ name: 'my-api' });
server
		.use(restify.fullResponse())
		.use(restify.bodyParser());

server.get('/user', function (req, res, next) {
	userSave.find({}, function (error, users) {
		res.send(users)
	})
});

server.listen(3000, function () {
	console.log('%s listening at %s', server.name, server.url)
});

