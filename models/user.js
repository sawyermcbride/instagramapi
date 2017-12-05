/**
 * Surgetalk Oct. 2017
 * Register
 * By Sawyer McBride
 * 
 * READ: https://javascript.info/promise-chaining
 * 
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
                    if(data.length > 0)
                        res(true); //1 means already exists
                    else
                        res(false);
                })
                .catch( (err) => {
                    rej('err');
                })
        });
        
        const hashPassword = function(password) {
            return new Promise( (res, rej) => {
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        res(hash);
                    });
                });
            })
        }
        
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
        
        return new Promise( (resolve, reject) => {
            
            checkDuplicate
            .then( (val) => {
                if(val)
                    throw new Error("User already exists")
                else {
                    hashPassword(this.password)
                    .then(hash => {
                        createUser(hash);
                    })
                    .then(() => {
                        //once create user
                        resolve();
                    })
                }
            })
            .catch( (err) => {
                reject(err);
            })
        });
    }
    static checkPassword (hash, password) {
        return new Promise( (res, rej) => {
            bcrypt.compare(password, hash, function(err, val) {
                if(err)
                    return rej(err);
                res(val);
            });
        })
    }
    static login(email, plain_password) {
        let self = this;
        let userObj;
        return new Promise( (resolve, reject) => {
            db.one('SELECT * FROM users WHERE email=$1', [email])
            .then( user => {
                userObj = user;
                User.checkPassword(user.password, plain_password).then( (res) => {
                    if(res)
                        resolve({val:true, obj: userObj});
                    else
                        resolve({val: false, obj:{}});
                })
            }, () => {
                resolve({val: false, obj:{msg: 'doesn\'t exist'}});
            })
        })
    }
    
}

module.exports = User;
