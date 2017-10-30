const User = require('../models/user');

let options = {};
const pgb = require('pg-promise')(options);
const connectionString = 'postgres://postgres:Mariner166$!@localhost:5432/instagramapi';
const db = pgb(connectionString);



module.exports = function(req, res, next) {
    
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;
    let email = req.body.email;
    
    db.none("insert into users(username, name, email, password) \
                        values( ${username}, ${name}, ${email}, ${password}", {username:'sawyer',name:'sawyer Mcbride',email:'samcbr', password:'akaka'})
                            .then(() => {
                                res();
                            });
    return next();
    let user = new User(username, name, email, password);
    user.save().then( ()=> {    
      next();
    }).catch( (err) => {
        next(err);
    })
}