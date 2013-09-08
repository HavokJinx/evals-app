
/*
 * GET home page.
 */

module.exports = function(app){
	var _ = app._,
		directory = '../../public/js/app/templates/';

	this.index = function(req, res){
		console.log("req");
		console.dir( req.route );
		console.log(directory + req.route.params.file );
    res.render( directory + req.route.params.file , { });
	};
	return this;
}