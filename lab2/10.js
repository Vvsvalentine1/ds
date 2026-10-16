'use strict';

const phones = {
    Sasha: '11111111111',
    Stas: '22222222222',
    Vlad: '33333333333'
};

function findPhoneByName(name) {
    return phones[name] || "";
}

console.log(findPhoneByName("Stas"));

module.exports = {findPhoneByName};