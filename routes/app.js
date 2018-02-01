
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
    res.render('app');
})
router.get('/user', (req, res) => {
    if(!req.session.user) {
        res.status(403).json(null);
    }
    res.json({'user': req.session.user})
});


module.exports = router;