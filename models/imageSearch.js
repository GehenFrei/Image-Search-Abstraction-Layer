'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Search = new Schema({
	query: String,
	results : Array,
	time: Number
});

module.exports = mongoose.model('Search', Search);
