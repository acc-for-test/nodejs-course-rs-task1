const {Transform} = require('stream');

module.exports = function(stringTransform) {
    return new Transform({
        decodeStrings: false,
        transform: function(chunk, encoding, callback) {
            if('buffer' === encoding)
                chunk = new TextDecoder().decode(chunk, {stream: true});
            callback(false, stringTransform(chunk));
        },
    })
}