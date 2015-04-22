(function() {
	'use strict';

	var argv = require('minimist')(process.argv.slice(2)),
	app = require('./app/app.js');

	app.util.checkArgv(argv);
	app.run(argv.i, argv.o, argv.d);
}).call();