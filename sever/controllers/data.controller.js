const cloudinary = require('cloudinary');
const shortid = require('shortid');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE
});
connection.connect();

module.exports.updateData = async function(req, res){
  const magv = req.signedCookies.magv;
  if (magv){
    connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user) {
      if (err) throw err;
      res.render('data/updateData',{
        user: user
      })
    });
  }
  else {
      res.render('index.pug')
  }
}