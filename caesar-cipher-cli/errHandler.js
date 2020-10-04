const process = require('process');

module.exports = function (err) {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error(`Error: ${err.path} does not exist`);
        } else if (err.code === 'EISDIR') {
            console.error(`Error: ${err.path} is a directory`);
        } else if (err.code === 'EBUSY') {
            console.error(`Error: ${err.path} is not accessible`);
        } else {
            console.error(err);
        }
        process.exit(1);
    }
}