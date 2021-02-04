const fibonacci = function(num) {
    let fib = [];

    fib[0] = 0;
    fib[1] = 1;
    
    for (let i = 2; i <= 25; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    } 
       
    if (num < 0) {
        return "OOPS"
    } else {
        return fib[num];
    }
}

module.exports = fibonacci