'use strict';

var map = require('../../config/rq');

module.exports = function(e) {
    return map ? require('../../' + map[e]) : null;
};