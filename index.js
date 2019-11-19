require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const app = express();
const userRoutes = require('./sever/routes/user.route');
const dataRoutes = require('./sever/routes/data.route');
const fileRoutes = require('./sever/routes/file.route');
const dbconfig = require('./sever/database/dbconfig');
const port = process.env.PORT || 4000;
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("kimboyune"));
app.use('/users', userRoutes);
app.use('/data', dataRoutes);
app.use('/file', fileRoutes);
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

app.get('/', async function(req, res){
  const magv = req.signedCookies.magv;
  if (magv){
    connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user) {
      if (err) throw err;
      res.render('index.pug',{
        user: user
      })
    });
  }
  else {
      res.render('index.pug',)
  }
});

app.listen(port, function(){ 
  console.log('app listening at port: ' + port);
});