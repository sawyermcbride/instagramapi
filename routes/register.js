const User = require('../models/user');

const db = require('../config/db');



module.exports = function(req, res, next) {
    
    let password = req.body.password;
    let name = req.body.name;
    let email = req.body.email.toLowerCase();
    
    let user = new User(name, email, password);
    user.save().then( () => {    
        res.json({msg:`registered user ${email}`});
        
    }, (msg) => {
        console.log(msg);
        res.status(409).json({msg:msg});
    }).catch( (err) => {
        next(err);
    })
}