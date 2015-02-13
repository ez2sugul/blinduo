function Analyzer() {
	var lines = undefined;
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

	if (this.lines === undefined) {
		callback('', null);
		return;
	}

	var _this = this;
	this.lines.forEach(function(line, index) {
		var aMatch = re.exec(line);
		
		if (aMatch.length <= 0) {
			return;
		}

		aoMatches[index] = {date: aMatch[1], user:aMatch[2], message:aMatch[3]};
		
		if (index === _this.lines.length - 1) {
			callback(null, aoMatches);
			return;
		}
	});
}

module.exports = Analyzer;