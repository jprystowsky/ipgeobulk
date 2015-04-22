(function() {
	'use strict';

	var fs = require('fs'),
	maxmind = require('maxmind'),
	json2csv = require('json2csv');

	exports.util = require('./util.js');

	exports.run = function(inputPath, outputPath, dbPath) {
		maxmind.init(dbPath);

		fs.readFile(inputPath, 'utf8', function (err, data) {
			if (err) {
				throw err;
			}

			var arr = data.toString('utf8').split(/\s+/);

			var jsonDat = [];

			for (var i = 0; i < arr.length; i++) {
				jsonDat.push(maxmind.getLocation(arr[i]));
			}

			json2csv({data: jsonDat, fields: ['countryCode', 'countryName', 'region', 'city', 'postalCode', 'latitude', 'longitude', 'dmaCode', 'areaCode', 'metroCode', 'distance', 'continentCode', 'regionName']}, function(err, csv) {
				if (err) throw err;

				fs.writeFile(outputPath, csv, function (err) {
					if (err) throw err;
				})
			});
		});
	};
}).call();