var SocialProviderFactory = function(name) {

	try {

		if(!name) {
			throw new Error("Invalid or undefined social provider")
		}

		return require("../services/" + name);
	}

	catch(e) {
		throw e;
	}

};

module.exports = SocialProviderFactory;