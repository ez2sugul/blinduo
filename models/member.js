"use strict";

module.exports = function(sequelize, DataTypes) {
	var Member = sequelize.define('member', {
		"username": {
			type: DataTypes.STRING,
			unique: true,
			validate: {},
			allowNull : false
		},
		"my-company": {
			type: DataTypes.STRING,
			unique: false,
			allowNull : false
		},
		"email": {
			type: DataTypes.STRING,
			unique: true,
			allowNull : false,
			validate:{isEmail:true}
		},
		"birth-year": {
			type: DataTypes.INTEGER,
			unique: false,
			allowNull : false,
			validate: {isNumeric:true}
		},
		"uppperlimit": {
			type: DataTypes.INTEGER,
			unique: false,
			allowNull : true,
			defaultValue : 3,
			validate: {isNumeric: true}
		},
		"lowerlimit": {
			type: DataTypes.INTEGER,
			unique: false,
			allowNull : true,
			defaultValue : 3,
			validate: {isNumeric: true}
		},
		"gender": {
			type: DataTypes.STRING,
			unique: false,
			allowNull: false,
			validate: {isIn:[['M', 'F', 'm', 'f']]}
		},
		"my-character": {
			type: DataTypes.STRING,
			unique: false,
			allowNull: false
		},
		"prefer-character": {
			type: DataTypes.STRING,
			unique: false,
			allowNull: true
		},
		"my-charm": {
			type: DataTypes.STRING,
			unique: false,
			allowNull: true
		},
		"prefer-charm": {
			type: DataTypes.STRING,
			unique: false,
			allowNull: true
		},
		"exclude-company": {
			type: DataTypes.STRING,
			unique: false,
			allowNull: true
		},
		"my-religion": {
			type: DataTypes.STRING,
			unique: false,
			allowNull: false
		},
		"exclude-religion": {
			type: DataTypes.STRING,
			unique: false,
			allowNull: true
		}
	});
	return Member;
};