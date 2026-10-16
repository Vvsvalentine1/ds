'use strict';

const fn = () => {
    const user1 = {name: 'Sasha'};
    let user2 = {name: 'Stas'};

    user1.name = 'John';
    user2.name = 'John';

 //user1 = {name: 'Michael'};
user2 = {name: 'Michael'};

    console.log(user1.name, user2.name);
};

fn();

module.exports = {fn};
