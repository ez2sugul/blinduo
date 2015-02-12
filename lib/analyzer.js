function Analyzer() {
	var lines;
};

Analyzer.prototype.toString = function() {
	return "Analyzer";
};

Analyzer.prototype.setTextArray = function(arr) {
	this.lines = arr;
};

Analyzer.prototype.parse = function(callback) {
	var re = /([0-9]+년 [0-9]+월 [0-9]+일) .*[0-9]+, (.*) : (.*)/;
	var aoMatches = [];

	this.lines.forEach.call(this, function(line, index) {
		var aMatch = re.exec(line);
		console.log('asdasdasd');
		if (aMatch.length <= 0) {
			console.log('continue');
			return;
		}

		aoMatches[index] = {date: aMatch[0], user:aMatch[1], message:aMatch[2]};
		console.log(index);
		if (index === this.lines.length - 1) {
			callback(aoMatches);
		}
	});
}

module.exports = Analyzer;