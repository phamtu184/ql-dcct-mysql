const mysql = require('mysql');
const dbconfig = require('../database/dbconfig');
const connection = mysql.createConnection(dbconfig.connection);
module.exports.getData = async function(req, res){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user) {
    if (err) throw err;
    connection.query(`SELECT * FROM khoa`, function (err, khoa){
      connection.query(`SELECT * FROM namhoc`, function (err, namhoc){
        connection.query(`SELECT * FROM bachoc`, function (err, bachoc){
          connection.query(`SELECT * FROM hedaotao`, function (err, hedaotao){
            connection.query(`SELECT * FROM nganh`, function (err, nganh){
              res.render('data/updateData',{
                user: user,
                khoa: khoa,
                namhoc: namhoc,
                bachoc: bachoc,
                hedaotao: hedaotao,
                nganh: nganh
              })
            })
          })
        })
      })
    })
  });
}

module.exports.viewData = async function(req, res){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user) {
    if (err) throw err;
    connection.query(`SELECT * FROM khoa`, function (err, khoa){
      connection.query(`SELECT * FROM namhoc`, function (err, namhoc){
        connection.query(`SELECT * FROM bachoc`, function (err, bachoc){
          connection.query(`SELECT * FROM hedaotao`, function (err, hedaotao){
            connection.query(`SELECT * FROM nganh`, function (err, nganh){
              res.render('data/viewData',{
                user: user,
                khoa: khoa,
                namhoc: namhoc,
                bachoc: bachoc,
                hedaotao: hedaotao,
                nganh: nganh
              })
            })
          })
        })
      })
    })
  });
}

module.exports.postData = async function(req, res){
  const magv = req.signedCookies.magv;
  let nkhoa ={
    "makhoa":req.body.makhoa,
    "tenkhoa":req.body.tenkhoa
  }
  let nbomon ={
    "mabm":req.body.mabm,
    "tenbm":req.body.tenbm,
    "makhoa": req.body.knmakhoa
  }
  let nnamhoc={
    "namhoc":req.body.namhoc
  }
  let nhocki ={
    "mahk":"hk"+req.body.tenhk + req.body.knnamhoc,
    "tenhk":"Học kì " + req.body.tenhk + " năm học " + req.body.knnamhoc,
    "namhoc": req.body.knnamhoc
  }
  let nmonhoc ={
    "mamh":req.body.mamh,
    "tenmh":req.body.tenmh,
    "tclythuyet":req.body.tclythuyet,
    "tcthuchanh":req.body.tcthuchanh
  }
  let nhedaotao ={
    "mahdt":req.body.mahdt,
    "tenhdt":req.body.tenhdt
  }
  let nbachoc ={
    "mabh":req.body.mabh,
    "tenbh":req.body.tenbh
  }  
  let nnganh ={
    "manganh":req.body.manganh,
    "tennganh":req.body.tennganh,
    "mabh":req.body.knmabh
  }
  let nlop ={
    "malop":req.body.malop,
    "tenlop":req.body.tenlop,
    "mahdt":req.body.knmahdt,
    "manganh":req.body.knmanganh
  }
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
    connection.query(`SELECT * FROM khoa`, function (err, khoa){
      connection.query(`SELECT * FROM namhoc`, function (err, namhoc){
        connection.query(`SELECT * FROM bachoc`, function (err, bachoc){
          connection.query(`SELECT * FROM hedaotao`, function (err, hedaotao){
            connection.query(`SELECT * FROM nganh`, function (err, nganh){
              let errors = [];
              if(req.body.makhoa){
                connection.query(`SELECT * FROM khoa WHERE makhoa = '${req.body.makhoa}'`, function(err, errInput){
                  if(req.body.makhoa.length > 10){
                    errors.push("Mã khoa không được quá 10 kí tự!");
                  }
                  if(req.body.tenkhoa.length > 30){
                    errors.push("Tên khoa không được quá 30 kí tự!");
                  }
                  if(errInput.length){
                    errors.push("Mã khoa đã tồn tại!");
                  }
                  if(errors.length){
                    res.render('data/updateData.pug',{
                      user: user,
                      errors: errors,
                      khoa: khoa,
                      namhoc: namhoc,
                      bachoc: bachoc,
                      hedaotao: hedaotao,
                      nganh: nganh
                    })              
                  }
                  else{
                  connection.query('INSERT INTO khoa SET ?', nkhoa, function (err, ttkhoa){
                    if (err) throw err;
                  })
                  res.redirect('/data/updateData')
                  }
                })
              }
          
              if(req.body.mabm){
                connection.query(`SELECT * FROM bomon WHERE mabm = '${req.body.mabm}'`, function(err, errInput){
                  if(req.body.mabm.length > 10){
                    errors.push("Mã bộ môn không được quá 10 kí tự!");
                  }
                  if(req.body.tenbm.length > 30){
                    errors.push("Tên bộ môn không được quá 30 kí tự!");
                  }
                  if(errInput.length){
                    errors.push("Mã bộ môn đã tồn tại!");
                  }
                  if(errors.length){
                    res.render('data/updateData.pug',{
                      user: user,
                      errors: errors,
                      khoa: khoa,
                      namhoc: namhoc,
                      bachoc: bachoc,
                      hedaotao: hedaotao,
                      nganh: nganh
                    })              
                  }
                  else{
                    connection.query('INSERT INTO bomon SET ?', nbomon, function (err, ttbm){
                      if (err) throw err;  
                    })
                    res.redirect('/data/updateData')
                  }
                })                
              }
          
              if(req.body.namhoc){
                connection.query(`SELECT * FROM namhoc WHERE namhoc = '${req.body.namhoc}'`, function(err, errInput){
                  if(req.body.namhoc.length<4 || req.body.namhoc.length>4){
                    errors.push("Năm học phải có 4 kí tự!")
                  }
                  if(errInput.length){
                    errors.push("Năm học đã tồn tại!");
                  }
                  if(errors.length){
                    res.render('data/updateData.pug',{
                      user: user,
                      errors: errors,
                      khoa: khoa,
                      namhoc: namhoc,
                      bachoc: bachoc,
                      hedaotao: hedaotao,
                      nganh: nganh
                    })              
                  }
                  else{
                    connection.query('INSERT INTO namhoc SET ?', nnamhoc, function (err, ttnh){
                      if (err) throw err;
                    })
                    res.redirect('/data/updateData')
                  }
                })                 

              }
          
              if(req.body.tenhk){
                connection.query(`SELECT * FROM hocki WHERE mahk = '${"hk"+req.body.tenhk + req.body.knnamhoc}'`, function(err, errInput){
                  if(errInput.length){
                    errors.push("Học kì đã tồn tại!");
                  }
                  if(errors.length){
                    res.render('data/updateData.pug',{
                      user: user,
                      errors: errors,
                      khoa: khoa,
                      namhoc: namhoc,
                      bachoc: bachoc,
                      hedaotao: hedaotao,
                      nganh: nganh
                    })              
                  }
                  else{
                    connection.query('INSERT INTO hocki SET ?', nhocki, function (err, tthk){
                      if (err) throw err; 
                    })
                    res.redirect('/data/updateData')
                  }
                })                
              }    
          
              if(req.body.mamh){
                connection.query(`SELECT * FROM monhoc WHERE mamh = '${req.body.mamh}'`, function(err, errInput){
                  if(req.body.mamh.length > 6 || req.body.mamh.length < 6){
                    errors.push("Mã môn học phải bằng 6 kí tự!");
                  }
                  if(req.body.tenmh.length > 30){
                    errors.push("Tên môn học không được quá 30 kí tự!");
                  }
                  if(errInput.length){
                    errors.push("Mã môn học đã tồn tại!");
                  }
                  if(errors.length){
                    res.render('data/updateData.pug',{
                      user: user,
                      errors: errors,
                      khoa: khoa,
                      namhoc: namhoc,
                      bachoc: bachoc,
                      hedaotao: hedaotao,
                      nganh: nganh
                    })              
                  }
                  else{
                    connection.query('INSERT INTO monhoc SET ?', nmonhoc, function (err, ttmh){
                      if (err) throw err;  
                    })
                    res.redirect('/data/updateData')
                  }
                })                   
              }
              
              if(req.body.mahdt){
                connection.query(`SELECT * FROM hedaotao WHERE mahdt = '${req.body.mahdt}'`, function(err, errInput){
                  if(req.body.mahdt.length > 10 || req.body.mahdt.length < 10){
                    errors.push("Mã hệ đào tạo phải bằng 10 kí tự!");
                  }
                  if(req.body.tenhdt.length > 20){
                    errors.push("Tên môn học không được quá 20 kí tự!");
                  }
                  if(errInput.length){
                    errors.push("Mã hệ đào tạo đã tồn tại!");
                  }
                  if(errors.length){
                    res.render('data/updateData.pug',{
                      user: user,
                      errors: errors,
                      khoa: khoa,
                      namhoc: namhoc,
                      bachoc: bachoc,
                      hedaotao: hedaotao,
                      nganh: nganh
                    })              
                  }
                  else{
                    connection.query('INSERT INTO hedaotao SET ?', nhedaotao, function (err, tthdt){
                      if (err) throw err;  
                    })
                    res.redirect('/data/updateData')
                  }
                })                
              }     
              
              if(req.body.mabh){
                connection.query(`SELECT * FROM bachoc WHERE mabh = '${req.body.mabh}'`, function(err, errInput){
                  if(req.body.mabh.length > 10){
                    errors.push("Mã bậc học không được quá 10 kí tự!");
                  }
                  if(req.body.tenbh.length > 20){
                    errors.push("Tên bậc học không được quá 20 kí tự!");
                  }
                  if(errInput.length){
                    errors.push("Mã bậc học đã tồn tại!");
                  }
                  if(errors.length){
                    res.render('data/updateData.pug',{
                      user: user,
                      errors: errors,
                      khoa: khoa,
                      namhoc: namhoc,
                      bachoc: bachoc,
                      hedaotao: hedaotao,
                      nganh: nganh
                    })              
                  }
                  else{
                    connection.query('INSERT INTO bachoc SET ?', nbachoc, function (err, ttbh){
                      if (err) throw err;  
                    })
                    res.redirect('/data/updateData')
                  }
                })                
              }     
          
              if(req.body.manganh){
                connection.query(`SELECT * FROM nganh WHERE manganh = '${req.body.manganh}'`, function(err, errInput){
                  if(req.body.manganh.length > 10 || req.body.manh.length < 10){
                    errors.push("Mã ngành học phải bằng 10 kí tự!");
                  }
                  if(req.body.tennganh.length > 30){
                    errors.push("Tên ngành không được quá 30 kí tự!");
                  }
                  if(errInput.length){
                    errors.push("Mã ngành đã tồn tại!");
                  }
                  if(errors.length){
                    res.render('data/updateData.pug',{
                      user: user,
                      errors: errors,
                      khoa: khoa,
                      namhoc: namhoc,
                      bachoc: bachoc,
                      hedaotao: hedaotao,
                      nganh: nganh
                    })              
                  }
                  else{
                    connection.query('INSERT INTO nganh SET ?', nnganh, function (err, ttnganh){
                      if (err) throw err; 
                    })
                    res.redirect('/data/updateData')
                  }
                })                
              }      
          
              if(req.body.malop){
                connection.query(`SELECT * FROM lop WHERE malop = '${req.body.malop}'`, function(err, errInput){
                  if(req.body.malop.length > 10 || req.body.malop.length < 10){
                    errors.push("Mã lớp phải bằng 10 kí tự!");
                  }
                  if(req.body.tenlop.length > 30){
                    errors.push("Tên lớp không được quá 30 kí tự!");
                  }
                  if(errInput.length){
                    errors.push("Mã lớp đã tồn tại!");
                  }
                  if(errors.length){
                    res.render('data/updateData.pug',{
                      user: user,
                      errors: errors,
                      khoa: khoa,
                      namhoc: namhoc,
                      bachoc: bachoc,
                      hedaotao: hedaotao,
                      nganh: nganh
                    })              
                  }
                  else{
                    connection.query('INSERT INTO lop SET ?', nlop, function (err, ttlop){
                      if (err) throw err;
                    })
                    res.redirect('/data/updateData')
                  }
                })                
              }        
            })
          })
        })
      })
    })
  })
}