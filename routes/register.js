const User = require('../models/user');

const db = require('../config/db');



module.exports = function(req, res, next) {
    
    let password = req.body.password;
    let name = req.body.name;
    let email = req.body.email;
    
    let user = new User(name, email, password);
    user.save().then( ()=> {    
      next();
    }).catch( (err) => {
        next(err);
    })
}