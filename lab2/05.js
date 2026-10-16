'use strict';

function rangeOdd(start, end) {
    const numbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            numbers.push(i);
        }
    }
    return numbers;
}
console.log(rangeOdd(15, 30));
