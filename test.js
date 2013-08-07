var vernam = require('./index')
,   plaintext = "hello world"
,   key_and_cipher = vernam.encrypt(plaintext)
,   key = key_and_cipher[0]
,   ciphertext = key_and_cipher[1]

console.log(plaintext)
console.log(ciphertext)
console.log(vernam.decrypt(key, ciphertext))
