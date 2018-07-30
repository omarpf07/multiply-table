const fs = require('fs');
// var colors = require('colors');

createFile = (b, limit) => {
    return new Promise((resolve, reject) => {

        if (!Number(b)) {
            reject(`Value: "${b}" is not a number.`.bgRed.white);
            return;
        } else {
            let data = '';
            for (let i = 1; i <= limit; i++) {
                data += `${b} * ${i} = ${b * i} \n`;
            }

            fs.writeFile(`tables/table-${b}.txt`, data, (err) => {
                if (err) reject(err);
                else resolve(`table${b}.txt`);
            });
        }
    })
}

printTable = (b, limit) => {

    console.log(`======================`.green);
    console.log(`     TABLA DE: ${b}   `.rainbow);
    console.log(`======================`.green);
    for (let i = 1; i < limit; i++) {
        console.log(`${b} * ${i} = ${b * i}`.cyan);
    }
}

module.exports = {
    createFile,
    printTable
}
