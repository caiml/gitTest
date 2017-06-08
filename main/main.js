module.exports = function main() {
    function deplex(x,y){
		var z=x%y;
		return z;
	}
	var su=deplex(9,4);
	console.log(su);
};