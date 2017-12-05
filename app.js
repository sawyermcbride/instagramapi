/**
 * Instagram App 
 * Sawyer McBride
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


 const router = express.Router();
 
 //configs
 app.set('view engine', 'jade');
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
 
 app.post('/login', login);
 


 app.get('/', (req, res) => {
   res.render('homepage');
 });
 
 app.get('/app', router)
 

 
 app.listen(3000);