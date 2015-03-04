"use strict"

module.exports = function(sequelize, DataTypes) {
	var Member = sequelize.define('member', {
		"username": {type : DataTypes.STRING, unique : true},
		"my-company":{type : DataTypes.STRING, unique : false},
		"email":{type : DataTypes.STRING, unique : true},
		"birth-year":{type : DataTypes.INTEGER, unique : false},
		"uppperlimit":{type : DataTypes.INTEGER, unique : false},
		"lowerlimit":{type : DataTypes.INTEGER, unique : false},
		"gender":{type : DataTypes.STRING, unique : false},
		"my-character":{type : DataTypes.STRING, unique : false},
		"prefer-character":{type : DataTypes.STRING, unique : false},
		"my-charm":{type : DataTypes.STRING, unique : false},
		"prefer-charm":{type : DataTypes.STRING, unique : false},
		"exclude-company":{type : DataTypes.STRING, unique : false},
		"my-religion":{type : DataTypes.STRING, unique : false},
		"exclude-religion":{type : DataTypes.STRING, unique : false}
	});
	return Member;
};