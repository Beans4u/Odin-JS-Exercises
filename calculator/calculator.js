function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (numbers) {
let total = 0
		for (let i=0; i < numbers.length; i++){
			total += numbers[i];
		}
		return total;
}

function multiply (numbers) {
	let total = 1;
			for (let i=0; i < numbers.length; i++){
				total *= numbers[i];
			}
			return total;
}

function power(num1, num2) {
	return num1 ** num2;
}

function factorial(x) {
	if (x === 0) {
    return 1;
 	}
  return x * factorial(x-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}