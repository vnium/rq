'use strict';

module.exports = function(mapping) {
	var mapping = require(mapping || '../../config/rq');
	return function(e) {
		return mapping ? require('../../' + mapping[e]) : null;
	};
};