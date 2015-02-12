var ConversationReader = require('../lib/conversation-reader');
var expect = require('chai').expect;
var should = require('chai').should();
var Analyzer = require('../lib/analyzer.js');
var path = require('path');
var appRoot = require('app-root-path');

describe('ConversationReader', function() {
	reader = new ConversationReader();
	console.log(path.dirname(require.main.filename));
	console.log('app-root-path : ' + appRoot);
	var sFilePath = appRoot + '/data/KakaoTalkChats.txt';

	describe('#readFile', function() {
		it('should return array of lines', function(done) {
			reader.readFile(sFilePath, function(err, aLines) {
				if (err) {
					throw err;
				}
				aLines.length.should.equal(27004);
				done();
			});
		});
	});

	describe('#readFile2', function() {
		it('should return data ', function(done) {
			reader.readFile2(sFilePath, function(err, aLines) {
			
				done();	
			});
			
		});
	});
});



describe('analyzer.js', function() {
	var aLines = ['2013년 2월 7일 오후 3:14, 심언국 : 그렇군',
'2013년 2월 7일 오후 3:14, 심언국 : 넌?',
'2013년 2월 7일 오후 3:15, 회원님 : 환존했러',
'2013년 2월 7일 오후 3:16, 심언국 : 얼마?',
'2013년 2월 7일 오후 3:16, 회원님 : 15만원'];
	analyzer = new Analyzer();
	analyzer.setTextArray(aLines);

	describe('#toString', function() {
		it('should return its name', function() {
			analyzer.toString().should.equal('Analyzer');
		});
	});

	describe('#parse', function() {
		
		it('should parse text to user name and user message', function(done) {
			analyzer.parse(function(aoData) {
				aoData.length.should.equal(1);
				done();
			});
		})
	});
});