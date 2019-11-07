const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE
});
connection.connect();

module.exports.getData = async function(req, res){
  const magv = req.signedCookies.magv;
  if (magv){
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
  else {
      res.render('index.pug')
  }
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
    "manh": req.body.manh,
    "namhoc":req.body.namhoc
  }
  let nhocki ={
    "mahk":req.body.mahk,
    "tenhk":req.body.tenhk,
    "manh": req.body.knmanh
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
              if (err) throw err;
              let errors = [];
              if(req.body.makhoa){
                connection.query(`SELECT * FROM khoa WHERE makhoa = '${req.body.makhoa}'`, function(err, errInput){
                  if(errInput.length){
                    errors.push("Mã khoa đã tồn tại!");
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
                  if(errInput.length){
                    errors.push("Mã bộ môn đã tồn tại!");
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
          
              if(req.body.manh){
                connection.query(`SELECT * FROM namhoc WHERE manh = '${req.body.manh}'`, function(err, errInput){
                  if(errInput.length){
                    errors.push("Mã năm học đã tồn tại!");
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
          
              if(req.body.mahk){
                connection.query(`SELECT * FROM hocki WHERE mahk = '${req.body.mahk}'`, function(err, errInput){
                  if(errInput.length){
                    errors.push("Mã học kì đã tồn tại!");
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
                  if(errInput.length){
                    errors.push("Mã môn học đã tồn tại!");
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
                  if(errInput.length){
                    errors.push("Mã hệ đào tạo đã tồn tại!");
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
                  if(errInput.length){
                    errors.push("Mã bậc học đã tồn tại!");
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
                  if(errInput.length){
                    errors.push("Mã ngành đã tồn tại!");
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
                  if(errInput.length){
                    errors.push("Mã lớp đã tồn tại!");
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