// Завернуть в try catch 1/0 и вывести на ноль делить нельзя 
try {
    let test = 1 / 0;
	console.log('На ноль делить нельзя');
} catch (err) {
    console.log('На ноль делить нельзя');
    console.log(err);
}