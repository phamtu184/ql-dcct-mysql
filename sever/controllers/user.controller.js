const bcrypt = require("bcryptjs");
const cloudinary = require('cloudinary');
let salt = bcrypt.genSaltSync(10);
const shortid = require('shortid');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE
});
connection.connect();

module.exports.userLogin = async function(req, res){
    res.render('users/login')
}

module.exports.userSignup = async function(req, res){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, result) {
    if (err) throw err;
    res.render('users/signup.pug',{
      magv: magv,
      result: result
    })
  });
}

module.exports.userList = async function(req, res){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT * FROM giangvien`, function (err, result) {
    if (err) throw err;
    res.render('users/userList.pug',{
      magv: magv,
      result: result
    })
  });
}

module.exports.userLogout = function(req, res){
  res.clearCookie("magv");
  res.clearCookie("tengv");
  res.redirect('/')
}

//-----------------POST----------------------

module.exports.postUserLogin = async function(req, res){
  const email = req.body.email;
  const password = req.body.password;
  connection.query(`SELECT * FROM giangvien WHERE email = '${email}'`, function (err, result) {
  if (!result.length) {
    res.render("users/login", {
      errors: ["Tài khoản không tồn tại!"],
      values: req.body
    });
    return;
  }
  if (!bcrypt.compareSync(password, result[0].password)) {
    res.render("users/login", {
      errors: ["Sai mật khẩu!"],
      values: req.body
    });
    return;
  }
  res.cookie("magv", result[0].magv, {
    signed: true
  });
  res.cookie("tengv", result[0].tengv, {
    signed: true
  });
  res.redirect('/users/profile/' + result[0].magv);
  });
}

module.exports.postUserSignup = async function(req, res){
  let errors = [];
  const password = req.body.password;
  const passwordConf = req.body.passwordConf;
  const email = req.body.email;
  const tengv = req.body.tengv;
  const magv = req.signedCookies.magv;
  if (email.length < 4){
    errors.push("Tên đăng nhập phải có từ 5 kí tự trở lên!")
  }
  if (tengv.length < 4){
    errors.push("Họ và tên giáo viên phải có từ 5 kí tự trở lên!");
  }
  if (password !== passwordConf){
    errors.push("Mật khẩu và xác nhận mật khẩu không giống nhau!");
  }
  if (password.length < 7){
    errors.push("Mật khẩu phải có từ 8 kí tự trở lên!");
  }
  if (errors.length) {
    connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, result){
      res.render("users/signup", {
        errors: errors,
        values: req.body,
        result: result
      });
      return;
    })

}
  let user ={
    "magv":shortid.generate(),
    "tengv": req.body.tengv,
    "sdt" : req.body.sdt,
    "email": req.body.email,
    "password": bcrypt.hashSync(req.body.password, salt),
    "passwordConf": bcrypt.hashSync(req.body.passwordConf, salt),
    "role": req.body.role
  }
  if(!errors.length){
    connection.query(`SELECT * FROM giangvien WHERE email = '${req.body.email}'`, function (err, result){
      if(result.length){
        errors.push("Email này đã được đăng ký!");
        connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, result){
          res.render("users/signup", {
            errors: errors,
            values: req.body,
            result: result
          });
          return;
        })
      }
      else{
        connection.query('INSERT INTO giangvien SET ?', user, function (err, result){
          if (err) throw err;
          res.render('users/userList.pug',{
            result: result
          })
        });
        res.redirect('/users/userList')
      }
    })
  }

}