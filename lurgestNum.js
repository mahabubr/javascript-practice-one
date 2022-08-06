function numbers(a, b, c) {
    if (a > b && a > c) {
        console.log('a is big')
    }
    else if (b > a && b > c) {
        console.log('b is big')
    }
    else if (c > a && c > b) {
        console.log('c is big')
    }
    else {
        console.log('I am Big')
    }
}
console.log(numbers(2, 3, 1));
console.log(numbers(2, 9, 7));
console.log(numbers(6, 5, 8));