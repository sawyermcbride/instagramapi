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


 const router = express.Router();
 
 //configs
 app.set('view engine', 'jade');
 app.set('veiws',__dirname+'/views');
 
 
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());
 app.use(morgan('tiny'));
 
 app.post('/register', (req, res) => {
  res.json({'registered':true})
 });

 app.get('/', (req, res) => {
   res.render('homepage');
 });
 
 app.get('/api', router)
 
 
 router.get('/', (req, res) => {
  res.json({'homepage':true});
 });
 
 
 app.listen(3000);