const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const mysql = require('mysql');
const dbconfig = require('../database/dbconfig');
const connection = mysql.createConnection(dbconfig.connection);
const util = require('util');
const query = util.promisify(connection.query).bind(connection);
module.exports.userLogin = async function(req, res){
    res.render('users/login')
}

module.exports.userSignup = async function(req, res){
  const magv = req.signedCookies.magv;
  const user = await query(`SELECT * FROM giangvien WHERE magv = '${magv}'`);
  const bomon = await query(`SELECT * FROM bomon`);
  res.render('users/signup.pug',{
    magv: magv,
    user: user,
    bomon: bomon
  })
}

module.exports.userList = async function(req, res){
  const magv = req.signedCookies.magv;
  const user = await query(`SELECT * FROM giangvien WHERE magv = '${magv}'`);
  const users = await query(`SELECT * FROM giangvien WHERE role = 'Lãnh đạo khoa' OR role ='Giảng viên'`);
  connection.query(`SELECT giangvien.tengv AS tengv, giangvien.magv AS magv, giangvien.sdt AS sdt, giangvien.email AS email, giangvien.role AS role,
  bomon.tenbm AS tenbm FROM giangvien JOIN bomon ON giangvien.mabm = bomon.mabm`, function (err, userss){
  res.render('users/userList.pug',{
    magv: magv,
    user: user,
    users: users,
    userss: userss
  })
})
}

module.exports.userLogout = function(req, res){
  res.clearCookie("magv");
  res.clearCookie("tengv");
  res.redirect('/')
}

module.exports.deletegv = async function(req, res){
  const id = req.params.idgv;
  connection.query(`DELETE FROM decuong WHERE magv = '${id}'`, function (err, user){
    if (err) throw err;
  })
  connection.query(`DELETE FROM giangvien WHERE magv = '${id}'`, function (err, user){
    if (err) throw err;
  })
  console.log("Successful delete");
  res.redirect('/users/userList/');
}

module.exports.changeUser = async function(req, res){
  const magv = req.signedCookies.magv;
  const user = await query(`SELECT * FROM giangvien WHERE magv = '${magv}'`);
  const users = await query(`SELECT * FROM giangvien`);
  const bomon = await query(`SELECT * FROM bomon`);
  res.render('users/changeUser.pug',{
    magv: magv,
    user: user,
    bomon: bomon,
    users: users
  })
}

//-----------------POST----------------------

module.exports.postUserLogin = async function(req, res){
  const email = req.body.email + "@tvu.edu.vn";
  const password = req.body.password;
  connection.query(`SELECT * FROM giangvien WHERE email = '${email}'`, function (err, user) {
  if (!user.length) {
    res.render("users/login", {
      errors: ["Tài khoản không tồn tại!"],
      values: req.body
    });
    return;
  }
  if (!bcrypt.compareSync(password, user[0].password)) {
    res.render("users/login", {
      errors: ["Sai mật khẩu!"],
      values: req.body
    });
    return;
  }
  res.cookie("magv", user[0].magv, {
    signed: true
  });
  res.cookie("tengv", user[0].tengv, {
    signed: true
  });
  res.redirect('/');
  });
}

module.exports.postUserSignup = async function(req, res){
  let errors = [];
  const magv = req.signedCookies.magv;
  const user = await query(`SELECT * FROM giangvien WHERE magv = '${magv}'`);
  const password = req.body.password;
  const passwordConf = req.body.passwordConf;
  const email = req.body.email + "@tvu.edu.vn";
  const tengv = req.body.tengv;
  const sdt = req.body.sdt;
  if (email.length < 3){
    errors.push("Email có từ 3 kí tự trở lên!")
  }
  if (email.length > 50){
    errors.push("Email không được quá 50 kí tự!")
  }
  if (tengv.length < 4){
    errors.push("Họ và tên giáo viên phải có từ 5 kí tự trở lên!");
  }
  if (tengv.length > 50){
    errors.push("Họ và tên giáo viên không được quá 50 kí tự!");
  }
  if (password !== passwordConf){
    errors.push("Mật khẩu và xác nhận mật khẩu không giống nhau!");
  }
  if (password.length < 7){
    errors.push("Mật khẩu phải có từ 8 kí tự trở lên!");
  }
  if (sdt.length < 10 || sdt.length > 10 || /[a-z]/i.test(sdt)){
    errors.push("Số điện thoại không hợp lệ (phải có 10 số và không có kí tự đặc biệt)!");
  }
  if (req.body.magv.length > 5 || req.body.magv.length < 5) {
    errors.push("Mã giảng viên phải có 5 kí tự!");
  }
  if (errors.length) {
    connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err){
      connection.query(`SELECT * FROM bomon`, function (err, bomon){
        res.render("users/signup", {
          errors: errors,
          values: req.body,
          bomon: bomon,
          user: user
        });
        return;
      })
    })
  }
  let giangvien ={
    "magv":req.body.magv,
    "tengv": req.body.tengv,
    "sdt" : req.body.sdt,
    "email": req.body.email+ "@tvu.edu.vn",
    "password": bcrypt.hashSync(req.body.password, salt),
    "passwordConf": bcrypt.hashSync(req.body.passwordConf, salt),
    "role": req.body.role,
    "mabm": req.body.knmabm
  }
  if(!errors.length){
    const emailbd = await query(`SELECT * FROM giangvien WHERE email = '${req.body.email + '@tvu.edu.vn'}'`);
    const magvbd = await query(`SELECT * FROM giangvien WHERE magv = '${req.body.magv}'`);
    const bomon = await query(`SELECT * FROM bomon`);
    if(magvbd.length){
      errors.push("Mã giảng viên đã tồn tại!");
      res.render("users/signup", {
        errors: errors,
        values: req.body,
        bomon: bomon,
        user: user
      });
    }
    else if(emailbd.length){
      errors.push("Email này đã được đăng ký!");
      res.render("users/signup", {
        errors: errors,
        values: req.body,
        bomon: bomon,
        user: user
      });
    }
    else{
      connection.query('INSERT INTO giangvien SET ?', giangvien, function (err, user){
        if (err) throw err;
      });
      res.redirect('/users/userList')
    }
  }
}

module.exports.postChangeUser = async function(req, res, next){
  let errors = [];
  const magv = req.signedCookies.magv;
  const user = await query(`SELECT * FROM giangvien WHERE magv = '${magv}'`);
  const password = req.body.password;
  const passwordConf = req.body.passwordConf;
  const email = req.body.email + "@tvu.edu.vn";
  const tengv = req.body.tengv;
  const sdt = req.body.sdt;
  const users = await query(`SELECT * FROM giangvien`);
  const bomon = await query(`SELECT * FROM bomon`);
  if (email.length < 3){
    errors.push("Email có từ 4 kí tự trở lên!")
  }
  if (email.length > 50){
    errors.push("Email không được quá 50 kí tự!")
  }
  if (tengv.length < 4){
    errors.push("Họ và tên giáo viên phải có từ 5 kí tự trở lên!");
  }
  if (tengv.length > 50){
    errors.push("Họ và tên giáo viên không được quá 50 kí tự!");
  }
  if (password !== passwordConf){
    errors.push("Mật khẩu và xác nhận mật khẩu không giống nhau!");
  }
  if (password.length < 7){
    errors.push("Mật khẩu phải có từ 8 kí tự trở lên!");
  }
  if (sdt.length < 10 || sdt.length > 10 || /[a-z]/i.test(sdt)){
    errors.push("Số điện thoại không hợp lệ (phải có 10 số và không có kí tự đặc biệt)!");
  }
  if (!req.body.magvchange || req.body.magvchange == " "){
    errors.push("Vui lòng chọn giáo viên!");
  }
  if (errors.length) {
    res.render("users/changeUser", {
      errors: errors,
      values: req.body,
      bomon: bomon,
      users: users,
      user: user
    });
    return;
  }
  let giangvien ={
    "tengv": req.body.tengv,
    "sdt" : req.body.sdt,
    "email": req.body.email + "@tvu.edu.vn",
    "password": bcrypt.hashSync(req.body.password, salt),
    "passwordConf": bcrypt.hashSync(req.body.passwordConf, salt),
    "role": req.body.role,
    "mabm": req.body.knmabm
  }
  if(!errors.length){
    connection.query(`UPDATE giangvien SET ? WHERE magv = '${req.body.magv}'`, giangvien, function (err){
      if (err) throw err;
    });
    res.redirect('/users/userList')
  }
}

module.exports.userChangeRole = function(req, res, next){
  connection.query(`UPDATE giangvien SET role = '${req.body.roleToChange}' WHERE magv = '${req.body.userToChangeRole}'`, function (err, user){
    if (err) throw err;
  })
  console.log("Successful change role");
  res.redirect('/users/userList/');
}