const { createFile, printTable } = require('./multiplicar/multiplicar');
const { argv } = require('./cfg/yargs');
var colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'create':
        createFile(argv.base, argv.limit).then(archivo => {
            console.log(`File created: ${colors.red(archivo)}`.yellow);
        }).catch(err => console.log(err));
        break;

    case 'print':
        printTable(argv.base, argv.limit);
        break;
    default:
        console.error(`Command hasn't been recognized.`.red.italic);
        break;
}

