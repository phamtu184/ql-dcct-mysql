const cloudinary = require('cloudinary');
const shortid = require('shortid');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE
});
connection.connect();

module.exports.listFile = async function(req, res){
  const magv = req.signedCookies.magv;
    connection.query(`SELECT * FROM decuong WHERE magv = '${magv}'`, function (err, file){
      connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
          res.render('file/myFile.pug',{
            user: user,
            file: file
          });
      })
    })
}