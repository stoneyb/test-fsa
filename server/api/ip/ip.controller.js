'use strict';

var _ = require('lodash');
var http = require('http');

// Get list of ips
exports.index = function(req, res) {
  //var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var ip = '73.34.169.75';
  var lat = 0.0;

  http.get("http://www.geoplugin.net/json.gp?ip="+ip, function(res) {
        res.on('data', function (data) {
            var geodata = JSON.parse(data);
            console.log(geodata.geoplugin_request);
            console.log(geodata.geoplugin_city);
            console.log(geodata.geoplugin_regionName);
            console.log(geodata.geoplugin_countryName);
            console.log(geodata.geoplugin_latitude);
            console.log(geodata.geoplugin_longitude);
            lat = geodata.geoplugin_longitude;
        });
  }).on('error', function(e) {
        console.log("Got error: " + e.message);
  });

  res.json({ip: ip, lat: lat});

};
