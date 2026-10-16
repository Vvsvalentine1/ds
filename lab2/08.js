'use strict';

function createUser(name, city) {
    return {
        name: name,
        city: city
    };
}

console.log(createUser("Sasha", "Tipperary"));

module.exports = {createUser};
