var express		= require('express'),
	bodyParser	= require('body-parser'),
	app			= express();

	app.use('/', express.static(__dirname));
	app.use(bodyParser.json());

	var port = process.env.PORT || 9000;

	app.listen(port);
	console.log('Listening on port ' + port);