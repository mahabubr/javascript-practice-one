function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));

function factorial(number) {
    let result = 1;
    let i = number;
    while (i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));