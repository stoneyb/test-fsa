'use strict';

var _ = require('lodash');
var http = require('http');

exports.index = function(req, res) {
  //var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var ip = '73.34.169.75';
  var lat = 0.0;

  var options = {
      host: 'www.geoplugin.net',
      path: '/json.gp?ip='+ip,
      port: 80,
      method: 'GET'
  };

  var request = http.request(options, function(response) {
      var body = "";
      response.on('data', function(data) {
          body += data;
      });
      response.on('end', function() {
          var geodata = JSON.parse(body);
          res.json({ip: ip, geodata: geodata});
      });
  });
  request.on('error', function(e) {
      console.log('Problem with request: ' + e.message);
  });
  request.end();

};
