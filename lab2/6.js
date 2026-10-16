'use strict';

function average (a, b) {
    return (a + b) / 2;
    }

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function calculate() {

    const results = [];

    for (let i = 0; i <= 9; i++) {
        const a =square(i);
        const b = cube(i);
        results.push(average(a, b));
}
 return results;
}
 console.log(calculate());