const opts = require('./getopts.js')();
const encoder = require('./encoder.js');
const createTransformStream = require('./transform.js');
const {pipeline} = require('stream');
const errHandler = require('./errHandler');

pipeline(
    opts.input,
    createTransformStream(encoder(opts.shift, opts.action)),
    opts.output,
    errHandler
);