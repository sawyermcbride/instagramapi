/**
 * Instagram App 
 * Sawyer McBride
 * https://instagram-api-sawyermcbride.c9users.io/
 */
 
 const express = require('express');
 const app = express();
 const pg = require('pg-promise');
 const bodyParser = require('body-parser');
 const morgan = require('morgan');
 const path = require('path');
 const register = require('./routes/register.js');
 const login = require('./routes/login.js');
 const cookieSession = require('cookie-session')
 const router = require('./routes/app.js');


function authenticate(req, res, next) {
  if(req.session && req.session.user) {
    if(req.path != '/')
      next();
  } else {
    res.redirect('/login');
  }
} 
 

app.set('view engine', 'pug');
app.set('views',__dirname+'/views');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieSession({
  name: 'session',
  keys: ['E32kHLYxncA22KXuTAs5upZg9AUZf9fS'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
 

app.use(morgan('tiny'));

app.post('/register', register);

app.get('/register', (req, res) => {
  res.render('register');
})
app.post('/login', login);
 
app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/', (req, res) => {
    if(req.session.user) {
      res.redirect('/app');
    }
   res.render('homepage');
 });
 
app.use('/app', router);
app.use(express.static('public'))


app.listen(8080, '0.0.0.0');


