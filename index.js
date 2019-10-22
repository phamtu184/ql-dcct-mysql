require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const app = express();
const userRoutes = require('./sever/routes/user.route');
const port = process.env.PORT || 4000;
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE
});
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("kimboyune"));
app.use('/users', userRoutes);
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));


app.get('/', async function(req, res){
  const magv = req.signedCookies.magv;
  console.log(magv);
  if (magv){
    connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, result) {
      if (err) throw err;
      res.render('index.pug',{
        result: result
      })
    });
  }
  else {
      res.render('index.pug')
  }
});

app.listen(port, function(){ 
  console.log('app listening at port: ' + port);
});