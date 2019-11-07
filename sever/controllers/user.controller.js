const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const mysql = require('mysql');
const connection = mysql.createConnection({
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
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user) {
    connection.query(`SELECT * FROM bomon`, function (err, bomon){
      if (err) throw err;
      res.render('users/signup.pug',{
        magv: magv,
        user: user,
        bomon: bomon
      })
    })
  });
}

module.exports.userList = async function(req, res){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT giangvien.tengv AS tengv, giangvien.magv AS magv, giangvien.sdt AS sdt, giangvien.email AS email, giangvien.role AS role,
  bomon.tenbm AS tenbm FROM giangvien JOIN bomon ON giangvien.mabm = bomon.mabm`, function (err, userss){
      connection.query(`SELECT * FROM giangvien WHERE role = 'admin' OR role ='user'`, function (err, users) {
        connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
          res.render('users/userList.pug',{
            magv: magv,
            user: user,
            users: users,
            userss: userss
          })
        })
      });
  })
}

module.exports.userLogout = function(req, res){
  res.clearCookie("magv");
  res.clearCookie("tengv");
  res.redirect('/')
}

module.exports.deletegv = function(req, res){
  const id = req.params.id;
    connection.query(`SELECT * FROM giangvien WHERE magv = '${req.signedCookies.magv}'`, function (err, user){
      if(user[0].magv == "qtv"){
        connection.query(`DELETE FROM giangvien WHERE magv = '${id}'`, function (err, user){
          if (err) throw err;
        })
        console.log("Successful delete");
        res.redirect('/users/userList/');
      }
      else{
        res.redirect('/users/userList/');
      }
    })
}

module.exports.changeUser = function(req, res){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user) {
    connection.query(`SELECT * FROM giangvien`, function (err, users){
      connection.query(`SELECT * FROM bomon`, function (err, bomon){
        if (err) throw err;
        res.render('users/changeUser.pug',{
          magv: magv,
          user: user,
          bomon: bomon,
          users: users
        })
      })
    })
  });
}

//-----------------POST----------------------

module.exports.postUserLogin = async function(req, res){
  const email = req.body.email;
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
  const password = req.body.password;
  const passwordConf = req.body.passwordConf;
  const email = req.body.email;
  const tengv = req.body.tengv;
  const sdt = req.body.sdt;
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
  if (sdt.length < 10 || sdt.length > 10){
    errors.push("Số điện thoại phải có 10 chữ số!");
  }
  if (errors.length) {
    connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
      connection.query(`SELECT * FROM bomon`, function (err, bomon){
        res.render("users/signup", {
          errors: errors,
          values: req.body,
          user: user,
          bomon: bomon
        });
        return;
      })
  })

}
  let giangvien ={
    "magv":req.body.magv,
    "tengv": req.body.tengv,
    "sdt" : req.body.sdt,
    "email": req.body.email,
    "password": bcrypt.hashSync(req.body.password, salt),
    "passwordConf": bcrypt.hashSync(req.body.passwordConf, salt),
    "role": req.body.role,
    "mabm": req.body.knmabm
  }
  if(!errors.length){
    connection.query(`SELECT * FROM giangvien WHERE email = '${req.body.email}'`, function (err, emailbd){
      connection.query(`SELECT * FROM giangvien WHERE magv = '${req.body.magv}'`, function (err, magvbd){
        if(magvbd.length){
          errors.push("Mã giảng viên đã tồn tại!");
          connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
            connection.query(`SELECT * FROM bomon`, function (err, bomon){
              res.render("users/signup", {
                errors: errors,
                values: req.body,
                user: user,
                bomon: bomon
              });
              return;
            })
          })
        }
        else if(emailbd.length){
          errors.push("Email này đã được đăng ký!");
          connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
            connection.query(`SELECT * FROM bomon`, function (err, bomon){
              res.render("users/signup", {
                errors: errors,
                values: req.body,
                user: user,
                bomon: bomon
              });
              return;
            })
          })
        }
        else{
          connection.query('INSERT INTO giangvien SET ?', giangvien, function (err, user){
            if (err) throw err;
          });
          res.redirect('/users/userList')
        }
    })
  })
  }
}

module.exports.postChangeUser = function(req, res, next){
  let errors = [];
  const password = req.body.password;
  const passwordConf = req.body.passwordConf;
  const email = req.body.email;
  const tengv = req.body.tengv;
  const sdt = req.body.sdt;
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
  if (sdt.length < 10 || sdt.length > 10){
    errors.push("Số điện thoại phải có 10 chữ số!");
  }
  if (errors.length) {
    connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
      connection.query(`SELECT * FROM giangvien`, function (err, users){
        connection.query(`SELECT * FROM bomon`, function (err, bomon){
          res.render("users/changeUser", {
            errors: errors,
            values: req.body,
            user: user,
            bomon: bomon,
            users: users
          });
          return;
        })
      })
  })

}
  let giangvien ={
    "magv":req.body.magv,
    "tengv": req.body.tengv,
    "sdt" : req.body.sdt,
    "email": req.body.email,
    "password": bcrypt.hashSync(req.body.password, salt),
    "passwordConf": bcrypt.hashSync(req.body.passwordConf, salt),
    "role": req.body.role,
    "mabm": req.body.knmabm
  }
  if(!errors.length){
    connection.query(`SELECT * FROM giangvien WHERE email = '${req.body.email}'`, function (err, emailbd){
      connection.query(`SELECT * FROM giangvien WHERE magv = '${req.body.magv}'`, function (err, magvbd){
        if(magvbd.length){
          errors.push("Mã giảng viên đã tồn tại!");
          connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
            connection.query(`SELECT * FROM bomon`, function (err, bomon){
              res.render("users/changeUser", {
                errors: errors,
                values: req.body,
                user: user,
                bomon: bomon
              });
              return;
            })
          })
        }
        if(emailbd.length){
          errors.push("Email này đã được đăng ký!");
          connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
            connection.query(`SELECT * FROM giangvien`, function (err, users){
              connection.query(`SELECT * FROM bomon`, function (err, bomon){
                res.render("users/changeUser", {
                  errors: errors,
                  values: req.body,
                  user: user,
                  bomon: bomon,
                  users: users
                });
                return;
              })
            })
          })
        }
        else{
          connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
            connection.query(`UPDATE giangvien SET ? WHERE magv ='${req.body.magvchange}'`, giangvien, function (err, changeuser){
              if (err) throw err;
              res.render('users/userList.pug',{
                user: user
              })
            });
          })
          res.redirect('/users/userList')
        }
    })
  })
  }
}

module.exports.userDelete = function(req, res, next){
  if(req.body.userToDelete){
    connection.query(`DELETE FROM decuong WHERE magv = '${req.body.userToDelete}'`, function (err, delFile){
      connection.query(`DELETE FROM giangvien WHERE magv = '${req.body.userToDelete}'`, function (err, delUser){
        if (err) throw err;
        console.log("Successful delete");
      })
    })
  res.redirect('/users/userList/');
  }
  
  if(req.body.userToChangeRole){
    connection.query(`UPDATE giangvien SET role = '${req.body.roleToChange}' WHERE magv = '${req.body.userToChangeRole}'`, function (err, user){
      if (err) throw err;
    })
    console.log("Successful change role");
    res.redirect('/users/userList/');
  }
}