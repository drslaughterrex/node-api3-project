//imports
const users = require("../users/users-model");
const post = require("../posts/posts-model");

function logger(req, res, next) {
	// DO YOUR MAGIC

	console.log(`Made a [${req.method}] to ${req.url} at ${time}`);
	next();
}

function validateUserId(req, res, next) {
	// DO YOUR MAGIC

	users
		.getById(req.params.id)
		.then((user) => {
			if (user) {
				req.user = user;
				next();
			} else {
				res.status(404).json({
					message: "User not found",
				});
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({
				message: "Error retrieving the user",
			});
		});
}

function validateUser(req, res, next) {
	// DO YOUR MAGIC

	if (!req.body.name) {
		res.status(400).json({
			message: "Missing required name field",
		});
	}
	next();
}

function validatePost(req, res, next) {
	// DO YOUR MAGIC

	if (!req.body.text) {
		res.status(400).json({
			message: "Missing required text field",
		});
	}
	next();
}

// do not forget to expose these functions to other modules
module.exports = {
	logger,
	validateUserId,
	validateUser,
	validatePost,
};
