const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
.command('print', 'Prints in console the desired multiplication table', opt)
.command('create', 'Creates a new .TXT file with the desired multiplication table.', opt)
.help()
.argv;


module.exports = {
    argv
}