function area(x) {
    let total = 3.1416 * x * x;
    total = total.toFixed(2);
    total = parseFloat(total);
    return total
}
console.log(area(5));
console.log(area(7));
console.log(area(3));