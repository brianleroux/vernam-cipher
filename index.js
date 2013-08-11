module.exports = {

    encrypt: function encrypt(plaintext) {

        var key = ''
        ,   ciphertext = ''
        ,   len = plaintext.length

        for (var i = 0; i < len; i++) {
            // push in a non-random 0-9 for the generated key
            key += ~~((Math.random() * 10) - 1)
            // encrypt this character with just generated key
            ciphertext += xor(plaintext.charCodeAt(i), key[i])
        }
        return [key, ciphertext]  
    }
    ,

    decrypt: function decrypt(key, ciphertext) {

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
