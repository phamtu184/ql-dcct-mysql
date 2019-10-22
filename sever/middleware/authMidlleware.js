var mysql = require('mysql');
var connection = mysql.createConnection({
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
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, result){
    if (!result) {
      res.redirect("/");
      return;
    }
  })
  next();
}

module.exports.permission = async function(req, res , next){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, result){
    if(result[0].role !== "qtv"){
      res.redirect("/");
      return;
    }
  })
  next();
}
