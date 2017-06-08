module.exports = function main() {
	var a=9;
	var b=4;
    function deplex(var x,var y){
		var z=x%y;
		return z;
	}
	console.log(deplex(a,b));
};