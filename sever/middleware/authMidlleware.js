const mysql = require('mysql');
const dbconfig = require('../database/dbconfig');
const connection = mysql.createConnection(dbconfig.connection);

module.exports.stillLogin = async function isLoggedIn(req, res, next) {
  const magv = req.signedCookies.magv;
  if (!req.signedCookies.magv){
    res.redirect('/');
    return;
  }
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
    if (!user) {
      res.redirect("/");
      return;
    }
  })
  next();
}

module.exports.permissionQtv = async function(req, res , next){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
    if(user[0].role !== "Quản trị viên"){
      res.redirect("/");
      return;
    }
  })
  next();
}

module.exports.permissionAdmin = async function(req, res , next){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
    if(user[0].role !== "Lãnh đạo khoa" && user[0].role !== "Quản trị viên"){
      res.redirect("/");
      return;
    }
  })
  next();
}
