/*
00 People in a Circle
Attempted
One hundred people are standing in a circle in an order 1 to 100.

No.1 has a sword. He kills the next person (i.e., no. 2) and gives the sword to the next (i.e., no. 3). All person does the same until only one survives.

Which number survives at last?

Answer is an integer. Just put the number without any decimal places if it's an integer. If the answer is Infinity, output Infinity.

Feel free to get in touch with us if you have any questions
*/

const solution = () => {
    const numbers = new Set(Array(101).keys()); numbers.delete(0);
    let i = 1;
    while (numbers.size != 1) {
        numbers.delete(i);
        i += 2;
        if (i > numbers.size) {
            i = i % numbers.size
        }
    }
    return numbers;
}