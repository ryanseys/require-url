var fs = require('fs');
var request = require('request');
var tmp = require('tmp');

tmp.setGracefulCleanup();

function require_url(url, callback) {
  tmp.file({ mode: 0644, prefix: 'requrl-', postfix: '.js' }, function(err, path, fd) {
    if (err) {
      callback(err, null);
      return;
    }

    function checkError(err, resp) {
      if (err || resp.statusCode !== 200) {
        callback(err, null);
        return;
      }
    }

    var writeStream = fs.createWriteStream(path);

    writeStream.on('finish', function() {
      try {
        var mod = require(path);
        callback(null, mod);
      } catch(e) {
        callback(e, null);
      }
      return;
    });

    request(url, checkError).pipe(writeStream);
  });
}

module.exports = require_url;
