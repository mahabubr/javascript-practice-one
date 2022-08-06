// function oddOrEven(number) {
//     if (number % 2 === 0) {
//         console.log('even');
//     }
//     else {
//         console.log('odd');
//     }
// }
// const num1 = 2;
// const num2 = 9;
// const num3= 104;
// oddOrEven(num1);
// oddOrEven(num2);
// oddOrEven(num3);

function oddOrEven(number) {
    if (number % 2 === 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
}
const num1 = 2;
const num2 = 9;
const num3 = 104;
const totalNum = oddOrEven(num1);
const totalNum1 = oddOrEven(num2);
const totalNum3 = oddOrEven(num3);
console.log(totalNum);
console.log(totalNum1);
console.log(totalNum3);