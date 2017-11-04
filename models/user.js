/**
 * Surgefind Oct. 2017
 * Register
 * By Sawyer McBride
 */


const db = require('../config/db');
const bcrypt = require('bcrypt');

class User {
    constructor(name, email, password) {
        this.password = password;
        this.email = email;
        this.name = name;
    }
    save() {
        let self = this;
        const checkDuplicate = new Promise( (res, rej) => {
            db.any('SELECT * FROM users WHERE email = $1', [self.email])
                .then( (data) => {
                    console.log(data);
                    if(data.length > 0)
                        rej(1); //1 means already exists
                })
                .catch( (err) => {
                    rej('err');
                })
        });
        
        const createUser = function(hash) {
            return new Promise( (res, rej) => {
                db.none('INSERT INTO users(name, email, password) VALUES($1, $2, $3)', [self.name, self.email, hash])
                    .then(() => {
                        res();
                    })
                    .catch(error => {
                        rej(0);
                    });
            })
        }
            
        return new Promise( (res, rej) => {
            console.log(self);
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash("my password", salt, function(err, hash) {
                    checkDuplicate
                        .then(createUser(hash))
                        .catch( (code) => {
                            res(code);
                        })
                        .then( (res, rej) => {
                           console.log(res); 
                        });
                });
            });
        })
    }
}

module.exports = User;
