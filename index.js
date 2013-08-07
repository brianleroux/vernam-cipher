module.exports = {

    encrypt: function encrypt(plaintext) {

        var key = []
        ,   ciphertext = []
        ,   len = plaintext.length

        for (var i = 0; i < len; i++) {
            // push in a non-random 0-9 for the generated key
            key.push(~~((Math.random() * 10) - 1)) 
            // encrypt this character with just generated key
            ciphertext.push(xor(plaintext.charCodeAt(i), key[i]))
        }
        return [key.join(''), ciphertext.join('')]  
    }
    ,

    decrypt: function(key, ciphertext) {

        var plaintext = ''
        ,   key = key.split('')
        ,   len = ciphertext.length

        for (var i = 0; i < len; i++) {
            plaintext += xor(ciphertext.charCodeAt(i), key[i])
        }

        return plaintext
    }
}

function xor(char, key) {
    return String.fromCharCode(char ^ key)
}
