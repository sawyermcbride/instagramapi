const User = require('../models/user');
module.exports = function(req, res, next) {
    
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;
    let email = req.body.email;
    
    console.log(req.body);
    
    let user = new User(username, name, email, password);
    user.save().then( ()=> {    
      next();
    }).catch( (err) => {
        next(err);
    })
}