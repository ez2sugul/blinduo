var appRoot = require('app-root-path');
var ConversationReader = require('../lib/conversation-reader');
var expect = require('chai').expect;
var should = require('chai').should();
var Analyzer = require('../lib/analyzer.js');
var path = require('path');
var fs = require('fs');
var nodemailer = require('nodemailer');

var db = require(appRoot + '/models');

describe('ConversationReader', function() {
	reader = new ConversationReader();
	console.log(path.dirname(require.main.filename));
	console.log('app-root-path : ' + appRoot);

	describe('ConversationReader.readFile', function() {
		it('should return array of lines', function(done) {
			var sFilePath = appRoot + '/data/KakaoTalkChats.txt';
			reader.readFile(sFilePath, function(err, aLines) {
				if (err) {
					throw err;
				}
				aLines.length.should.equal(27004);
				done();
			});
		});

		it('should return 115 for line count', function(done) {
			var hwangFile = appRoot + "/data/KakaoTalkChats-hwang.txt";
			reader.readFile(hwangFile, function(err, aLines) {
				if (err) {
					throw err;
				}

				aLines.length.should.equal(115);
				done();
			});
		});
	});
});



describe('analyzer', function() {
	var aLines = ['2013년 2월 7일 오후 3:14, 심언국 : 그렇군',
		'2013년 2월 7일 오후 3:14, 심언국 : 넌?',
		'2013년 2월 7일 오후 3:15, 회원님 : 환존했러',
		'2013년 2월 7일 오후 3:16, 심언국 : 얼마?',
		'2013년 2월 7일 오후 3:16, 회원님 : 15만원'
	];
	analyzer = new Analyzer();
	analyzer.setTextArray(aLines);

	describe('analyzer.toString', function(done) {
		it('should return its name', function(done) {
			analyzer.toString().should.equal('Analyzer');
			done();
		});
	});

	describe('analyzer.parse', function() {

		it('should parse text to user name and user message', function(done) {
			analyzer.parse(function(err, aoData) {
				aoData.length.should.equal(5);
				done();
			});
		});

		it('should have 심언국 at first element and its message should equal to 그렇군', function(done) {
			analyzer.parse(function(err, aoData) {
				aoData[0].user.should.equal('심언국');
				aoData[0].message.should.equal('그렇군');
				done();
			});
		});
	});
});

describe('sequelizer', function() {
	describe('sequelizer.create tables', function() {
		it('should create tables', function(done) {
			/** force: true option is to truncate table */
			db.member.sync({
				force: true
			}).then(function() {
				done();
			});
		});
	});

	describe('sequelizer.insert some data', function() {

		it('should insert data', function(done) {

			/** default timeout 2000 of mocha is too short 
			for inserting 500 data */
			this.timeout(5000);

			member = db.member;
			var insertedCount = 0;


			fs.readFile(appRoot + '/data/blinduo.json', function(err, data) {
				if (err) {
					insertedCount.should.equal(500);
					console.log('ERROR : ' + err);
					done();
					return;
				}

				var data = JSON.parse(data);

				data.forEach(function(value, index, arr) {

					// add logging:false option to turn off sql output
					member.create(value, {
						logging: false
					}).then(function(result) {
						insertedCount++;
						return result;
					}, function(error) {
						console.log('ERROR : ' + error);
						done();
						return error;
					}).then(function(result) {
						if (index === arr.length - 1) {
							insertedCount.should.equal(500);
							done();
							return;
						}
					});

				});

			});

		});
	});

});

describe('email', function() {
	describe('email.send email to seunghoon100', function() {
		this.timeout(5000);

		it('...', function(done) {
			var transporter = nodemailer.createTransport({
				service: 'Gmail',
				auth: {
					user: 'bot.blinduo@gmail.com',
					pass: 'qortmdgns1'
				},
				port: 465
			});

			var local = {
				email: 'seunghoon100@gmail.com',
				url: 'ssd'
			};

			transporter.sendMail({
				from: 'blinduo bot',
				to: local.email,
				subject: 'test email',
				html: 'html'
			}, function(err, resStatus) {
				if (err) {
					console.log(err);
					return;
				}

				console.log(resStatus);

				done();
			});
		});
	});
});