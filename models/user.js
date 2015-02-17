"use strict"

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('user', {
		username : DataTypes.STRING
	});

	return User;
};