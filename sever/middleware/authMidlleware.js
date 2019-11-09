const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE
});
connection.connect();


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
    if(user[0].role !== "qtv"){
      res.redirect("/");
      return;
    }
  })
  next();
}

module.exports.permissionAdmin = async function(req, res , next){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
    if(user[0].role !== "admin" && user[0].role !== "qtv"){
      res.redirect("/");
      return;
    }
  })
  next();
}
