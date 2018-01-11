const User = require('../models/user');

const db = require('../config/db');


module.exports = function(req, res, next) {
    console.log(req.body);
    let email = req.body.email.toLowerCase();
    let password = req.body.password;
    if( !email.length || !password.length ) {
        res.render('login', {msg: 'Please enter your email and password'});
    }

    User.login(email, password)
    .then( (result) => {
        if(result.val) {
            req.session.user = result;
            res.redirect('/app');
        }
        else {
            res.render('login', {msg: 'Incorrect Login'});
        }
    })
    .catch( (err) => {
        res.render('login', {msg:'No account found'});
    })
}