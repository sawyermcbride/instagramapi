
const express = require('express');


const router = express.Router();

router.use((req, res, next) => {
    if(req.session && req.session.user) {
        console.log(req.session.user);        
        next();
    } else {
        res.redirect('/login');
    }
})

router.get('/', (req, res) => {
    res.send('App Page: Logged In as ' + req.session.user.obj.email);
})


module.exports = router;