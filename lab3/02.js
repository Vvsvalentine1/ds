'use strict';

function generatekey(length, characters) {
    let key = '';

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        key += characters[index];
    }

    return key;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

console.log(generatekey(16, characters));

module.exports = generatekey;