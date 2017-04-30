//include file system package
var fs = require('fs');


module.exports = {

	getFileAsString: function(path) {
		return new Promise((fulfill, reject) => {

			if (path === undefined || typeof path !== "string") {
				reject("input path is invalid");
			} else {

				fs.readFile(path, "utf8", (err, data) => {
					if (err) {
						reject(err);
					};
					fulfill(data);
				});

			}
		});
	},

	getFileAsJSON: function(path) {
		return new Promise((fulfill, reject) => {

			if (path === undefined || typeof path !== "string") {
				reject("input path is invalid");
			} else {

				fs.readFile(path, "utf8", (err, data) => {
					if (err) {
						reject(err);
					};
					var dataObj = JSON.parse(data);
					fulfill(dataObj);
				});

			}
		});
	},


	saveStringToFile: function(path, text) {
		return new Promise((fulfill, reject) => {
			if (text === undefined || typeof text !== "string") {
				reject("input text is invalid");
			}

			if (path === undefined || typeof path !== "string") {
				reject("input path is invalid");
			} else {
				fs.writeFile(path, text, function(err) {
					if (err) {
						reject(err);
					}
					fulfill(true);
				});
			}
		});
	},

	saveJSONToFile: function(path, obj) {
		return new Promise((fulfill, reject) => {
			var text = JSON.stringify(data);

			if (text === undefined || typeof text !== "string") {
				reject("input text is invalid");
			}

			if (path === undefined || typeof path !== "string") {
				reject("input path is invalid");
			} else {
				fs.writeFile(path, text, function(err) {
					if (err) {
						reject(err);
					}
					fulfill(true);
				});
			}
		});
	}

};