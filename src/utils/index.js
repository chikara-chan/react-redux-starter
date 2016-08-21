const Utils = function() {
	if (!(this instanceof Utils)) {
		return new Utils();
	}
};

Utils.prototype.init = function() {
	console.log(1);
}

export default new Utils();