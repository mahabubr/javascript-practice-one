function oddAndEvenSum(number) {
    let evenN = 0;
    let oddN = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
            evenN = evenN + number[i];
            console.log('Even Number', evenN)
        }
        else {
            oddN = oddN + number[i];
            console.log('Odd Number', oddN);
        }
    }
}

const arr = [3, 5, 8, 4, 25, 12];
oddAndEvenSum(arr);