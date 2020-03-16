
function tinhBinhPhuong(x){
	return x*x;
}
function tinhTheKy(x){
    if (Math.floor(x/100)==0){
        var theKy = Math.floor(x/100);
    } else {
        var theKy =Math.floor(x/100)+1;
    }
    return theKy;
}