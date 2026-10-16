'use strict';

function introspect(iface) {
    const results = [];

    for (const key of Object.keys(iface)) {
        if (typeof iface[key] === 'function'){
            results.push([key, iface[key].length]);
        }
    }


return results;
}

const iface = {
    m1: x => [x],

    m2: function (x, y) {
        return [x, y];
    },

    m3: function (x, y, z) {
       return [x, y, z]; 
    }
};

console.log(JSON.stringify(introspect(iface)));

module.exports = introspect;