var graph = require('fbgraph');

var FacebookAdapter = function() {
	
	var _this = this;
	var _public = {};

	_this.init = function() {
		return _public;
	}

	_public.me = function(token, fn) {

		fn = fn || function(){};
		return graph.get("me", { access_token: token }, fn);
	}

	return _this.init();
}

module.exports = new FacebookAdapter();