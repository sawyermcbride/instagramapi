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
 const register = require('./routes/register');

 const router = express.Router();
 
 //configs
 app.set('view engine', 'jade');
 app.set('views',__dirname+'/views');
 
 
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());
 app.use(morgan('tiny'));
 
 app.post('/register', register);

 app.get('/', (req, res) => {
   res.render('homepage');
 });
 
 app.get('/app', router)
 

 
 
 app.listen(3000);