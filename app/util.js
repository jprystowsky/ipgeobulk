(function() {
	'use strict';
	
	exports.checkArgv = function(x) {
		if (!(x.i && x.o && x.d)) {
			throw "Missing arguments; please supply -i [inputfile], -o [outputfile], -d [dbfile]"
		}
	};
}).call();