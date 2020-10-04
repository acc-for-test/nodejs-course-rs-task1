const {program} = require('commander');
const fs = require('fs');
const process = require('process');
const path = require('path');

module.exports = function () {
    program.storeOptionsAsProperties(false);
    program
        .requiredOption('-s, --shift <number>', '(required) number to shift')
        .option('-i, --input <path>', 'path to the input file')
        .option('-o, --output <path>', 'path to the output file')
        .requiredOption('-a, --action <action>', '(required) encode or decode');

    program.parse(process.argv);
    const opts = program.opts();
    if ('undefined' === typeof (opts.output)) {
        var output = process.stdout;
    } else {
        try {
            var output = fs.createWriteStream(path.resolve(opts.output), {flags: 'a+'});
        } catch (e) {
            console.error(`Error: cannot write to "${opts.output}"`);
            process.exit(1);
        }
    }
    if ('undefined' === typeof (opts.input)) {
        var input = process.stdin;
        console.log('Ctrl+C to exit');
    } else {
        try {
            var input = fs.createReadStream(path.resolve(opts.input));
        } catch (e) {
            console.error(`Error: cannot read from "${opts.input}"`);
            process.exit(1);
        }
    }
    if ('encode' !== opts.action && 'decode' !== opts.action) {
        console.error(`Error: action must be encode or decode, "${opts.action}" given`);
        process.exit(1);
    }
    return {output: output, input: input, action: opts.action, shift: parseInt(opts.shift)};
}