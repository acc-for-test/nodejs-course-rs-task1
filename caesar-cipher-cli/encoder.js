const ALPHABET1 = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function tryEncode(c, shift, action, alphabet) {
    const pos = alphabet.indexOf(c);
    if (-1 === pos)
        return c;
    if(action == 'decode')
        shift = -shift;
    let idx = (pos + shift) % alphabet.length;
    if(idx < 0)
        idx += alphabet.length;
    return alphabet.charAt(idx);
}

module.exports = function (shift, action) {
    return function (s) {
        let result = '';
        for (let i = 0; i < s.length; i++) {
            let c = s.charAt(i);
            c = tryEncode(c, shift, action, ALPHABET1);
            c = tryEncode(c, shift, action, ALPHABET2);
            result += c;
        }
        return result;
    }
}