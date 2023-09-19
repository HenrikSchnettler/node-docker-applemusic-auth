const jwt = require('jsonwebtoken');
const fs = require('fs');

function generateDeveloperToken() {
    // Load the private key from base64 enviroment variable
    const privateKey = Buffer.from(process.env.PRIVATE_KEY_BASE64, 'base64').toString('utf-8');;

    // Define the token's expiration date (in seconds)
    const expirationDate = Math.floor(Date.now() / 1000) + (6 * 24 * 60 * 60); // 6 days from now

    // Define the token's headers and claims
    const headers = { alg: 'ES256', kid: '5FD62Y47NM' };
    const claims = {
        iss: '5H73WJGK3G',
        iat: Math.floor(Date.now() / 1000), // current date in seconds
        exp: expirationDate,
        aud: 'appstoreconnect-v1'
    };

    // Sign the token with the private key
    const token = jwt.sign(claims, privateKey, { algorithm: 'ES256', header: headers });

    return token;
}

module.exports = generateDeveloperToken;
