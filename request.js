const https = require('https');
function request (options) {
    return new Promise( (resolve, reject) => {
        https.request( options, (res) => {
            let out = "";
            res.on('data', (chunk) => {
                out += chunk;
            })

            res.on('end', () => {
                resolve(out);
            })

            res.on('error', ( err ) => {
                reject(err);
            })
        }).end();
    });
}

module.exports = request;