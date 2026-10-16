'use strict';

function iptonumber(ip = '127.0.0.1') {
    const bytes = ip.split('.').map(Number);

    const results = bytes
    .map((byte, i) => byte << (24 - i * 8))
    .reduce((sum , value) => sum + value, 0);

    return results;
}

console.log(iptonumber('10.0.0.1'));

module.exports = iptonumber;