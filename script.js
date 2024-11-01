function fibonacci(num) {
// your code here
    let	count=2;
	for(let i = 0,let j = 1;count <= num;count++){
		let k=j;
		j=i+j;
		i=k;
	}
	console.log(j);
}

module.exports = fibonacci;
