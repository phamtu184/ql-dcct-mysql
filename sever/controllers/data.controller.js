var mysql = require('mysql');
var connection = mysql.createConnection({
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
  let khoa ={
    "makhoa":req.body.makhoa,
    "tenkhoa":req.body.tenkhoa
  }
  let bomon ={
    "mabm":req.body.mabm,
    "tenbm":req.body.tenbm,
    "makhoa": req.body.knmakhoa
  }
  let namhoc={
    "manh": req.body.manh,
    "namhoc":req.body.namhoc
  }
  let hocki ={
    "mahk":req.body.mahk,
    "tenhk":req.body.tenhk,
    "manh": req.body.knmanh
  }
  let monhoc ={
    "mamh":req.body.mamh,
    "tenmh":req.body.tenmh,
    "tclythuyet":req.body.tclythuyet,
    "tcthuchanh":req.body.tcthuchanh
  }
  let hedaotao ={
    "mahdt":req.body.mahdt,
    "tenhdt":req.body.tenhdt
  }
  let bachoc ={
    "mabh":req.body.mabh,
    "tenbh":req.body.tenbh
  }  
  let nganh ={
    "manganh":req.body.manganh,
    "tennganh":req.body.tennganh,
    "mabh":req.body.knmabh
  }
  let lop ={
    "malop":req.body.malop,
    "tenlop":req.body.tenlop,
    "mahdt":req.body.knmahdt,
    "manganh":req.body.knmanganh
  }
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
    if (err) throw err;
    if(req.body.makhoa){
      connection.query('INSERT INTO khoa SET ?', khoa, function (err, ttkhoa){
        if (err) throw err;
        res.render('data/updateData.pug',{
          user: user,
          ttkhoa: ttkhoa
        })    
      })
      res.redirect('/data/updateData')
    }

    if(req.body.mabm){
      connection.query('INSERT INTO bomon SET ?', bomon, function (err, ttbm){
        if (err) throw err;
        res.render('data/updateData.pug',{
          user: user,
          ttbm: ttbm
        })    
      })
      res.redirect('/data/updateData')
    }

    if(req.body.manh){
      connection.query('INSERT INTO namhoc SET ?', namhoc, function (err, ttnh){
        if (err) throw err;
        res.render('data/updateData.pug',{
          user: user,
          ttnh: ttnh
        })    
      })
      res.redirect('/data/updateData')
    }

    if(req.body.mahk){
      connection.query('INSERT INTO hocki SET ?', hocki, function (err, tthk){
        if (err) throw err;
        res.render('data/updateData.pug',{
          user: user,
          tthk: tthk
        })    
      })
      res.redirect('/data/updateData')
    }    

    if(req.body.mamh){
      connection.query('INSERT INTO monhoc SET ?', monhoc, function (err, ttmh){
        if (err) throw err;
        res.render('data/updateData.pug',{
          user: user,
          ttmh: ttmh
        })    
      })
      res.redirect('/data/updateData')
    }
    
    if(req.body.mahdt){
      connection.query('INSERT INTO hedaotao SET ?', hedaotao, function (err, tthdt){
        if (err) throw err;
        res.render('data/updateData.pug',{
          user: user,
          tthdt: tthdt
        })    
      })
      res.redirect('/data/updateData')
    }     
    
    if(req.body.mabh){
      connection.query('INSERT INTO bachoc SET ?', bachoc, function (err, ttbh){
        if (err) throw err;
        res.render('data/updateData.pug',{
          user: user,
          ttbh: ttbh
        })    
      })
      res.redirect('/data/updateData')
    }     

    if(req.body.manganh){
      connection.query('INSERT INTO nganh SET ?', nganh, function (err, ttnganh){
        if (err) throw err;
        res.render('data/updateData.pug',{
          user: user,
          ttnganh: ttnganh
        })    
      })
      res.redirect('/data/updateData')
    }      

    if(req.body.malop){
      connection.query('INSERT INTO lop SET ?', lop, function (err, ttlop){
        if (err) throw err;
        res.render('data/updateData.pug',{
          user: user,
          ttlop: ttlop
        })    
      })
      res.redirect('/data/updateData')
    }        
  })
}