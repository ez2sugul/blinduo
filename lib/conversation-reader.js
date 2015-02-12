var fs = require('fs');

function ConversationReader() {

}

ConversationReader.prototype.readFile = function(filePath, callback) {
	var reader = fs.createReadStream(filePath, {
		flags: 'r',
		encoding: null,
		fd: null,
		mode: 0666,
		autoClose: true
	});

	var fileContents = '';

	reader.on('data', function(chunk) {
		fileContents += chunk;
	});
	reader.on('end', function() {
		console.log('end');
		var aSplitted = [];
		fileContents.split('\n').map(function(line, index, arr) {
			if (line !== '') {
				aSplitted[index] = line;
			}

			if (index === arr.length - 1) {
				callback(null, aSplitted);
			}
		});
		
	});
	reader.on('error', function(err) {
		callback('[ERROR]: ' + err, null);
	});
};

ConversationReader.prototype.readFile2 = function(filePath, callback) {
	fs.readFile(filePath, function(err, data) {
		if (err) {
			callback(err, null);
		} else {
			callback(null, data);
		}
	});
}

module.exports = ConversationReader;