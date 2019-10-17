var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ql-dcct-mysql"
});
connection.connect();

// module.exports.register = async (req, res, next) => {
//   let errors = [];
//   const password = req.body.password;
//   const passwordConf = req.body.passwordConf;
//   const email = req.body.email;
//   const tengv = req.body.tengv;
//   const magv = req.signedCookies.magv;

//  connection.query(`SELECT * FROM giangvien WHERE email = '${email}'`, function a(err, result) { 
//    if (result.length){
//     errors.push("Email này đã được đăng ký!");
//    }
//   })

//  connection.query(`SELECT * FROM giangvien WHERE tengv = '${tengv}'`, function b(err, result){
//   if (result.length){
//     errors.push("Họ và tên giáo viên đã tồn tại!");
//    }
//  })
//   if (email.length < 4){
//     errors.push("Tên đăng nhập phải có từ 5 kí tự trở lên!")
//   }
//   if (tengv.length < 4){
//     errors.push("Họ và tên giáo viên phải có từ 5 kí tự trở lên!");
//   }
//   if (password !== passwordConf){
//     errors.push("Mật khẩu và xác nhận mật khẩu không giống nhau!");
//   }
//   if (password.length < 7){
//     errors.push("Mật khẩu phải có từ 8 kí tự trở lên!");
//   }

// connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, result){
//   if (errors.length) {
//     res.render("users/signup", {
//       errors: errors,
//       values: req.body,
//       result: result
//     });
//     return;
// }
// })

//   next();
// };

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
    if(result[0].role !== "admin"){
      res.redirect("/");
      return;
    }
  })
  next();
}
