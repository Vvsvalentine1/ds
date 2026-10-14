'use strict';

const arr =[
true,
"car",
15,
25,
50,
"house",
false,
true,
];

const types = {};

for (const item of arr) {
    const type = typeof item;

    if (types[type] === undefined) {
       types[type] = 0; 
    }
  
types[type] += 1;
}

console.dir(types);
