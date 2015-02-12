var Reader = require('./conversation-reader');

var main = function() {
	var reader = new Reader();
	var filePath = './data/KakaoTalkChats.txt';
	reader.readFile2(filePath);
}

if (require.main === module) {
	main();
}