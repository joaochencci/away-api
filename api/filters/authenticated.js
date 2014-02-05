module.exports = function(req, res, ok) {

	if(!req.cookies.user_id || !req.cookies.user_id.length) {

		return res.json({

			result: "error",
			message: "Authenticated required."

		}, 403)
	}	

	else {
		ok();
	}
}