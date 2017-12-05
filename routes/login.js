const User = require('../models/user');

const db = require('../config/db');


module.exports = function(req, res, next) {
    let email = req.body.email.toLowerCase();
    let password = req.body.password;
    
    User.login(email, password)
    .then( (result) => {
        if(result.val) {
            res.json({'auth': true, 'user': result.obj });
        }
        else
            res.json({'auth': false, 'user': result.msg });
    })
    .catch( (err) => {
        res.status(401).json({'err': true, 'msg':err});
    })
}