'use strict';

const users = [
    {name : 'Sasha', phone: '11111111111'},
    {name : 'Stas', phone: '22222222222'},
    {name : 'Vlad', phone: '33333333333'}
];

function findPhoneByName(name) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            return users[i].phone;
}
    }
    return "";
}

console.log(findPhoneByName("Sasha"));

module.exports = {findPhoneByName};
