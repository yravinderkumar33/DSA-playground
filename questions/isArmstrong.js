/*
You are given an integer N you need to print all the Armstrong Numbers between 1 to N.

If sum of cubes of each digit of the number is equal to the number itself, then the number is called an Armstrong number.

For example, 153 = ( 1 * 1 * 1 ) + ( 5 * 5 * 5 ) + ( 3 * 3 * 3 ).
*/

const isArmstrongNumber = n => {
    let sum = 0, tempNum = n;
    while (tempNum > 0) {
        let lastDigit = tempNum % 10;
        sum += (lastDigit * lastDigit * lastDigit);
        tempNum = Math.floor(tempNum / 10);
    }
    return n === sum;
}

console.log(isArmstrongNumber(100));