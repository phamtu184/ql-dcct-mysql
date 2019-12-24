const mysql = require('mysql');
const dbconfig = require('../database/dbconfig');
const connection = mysql.createConnection(dbconfig.connection);
const util = require('util');
const query = util.promisify(connection.query).bind(connection);

module.exports.getData = async function(req, res){
  const magv = req.signedCookies.magv;
  const user = await query(`SELECT * FROM giangvien WHERE magv = '${magv}'`);
  const khoa = await query(`SELECT * FROM khoa`);
  const bomon = await query(`SELECT * FROM bomon`);
  const namhoc = await query(`SELECT * FROM namhoc`);
  const hocki = await query(`SELECT * FROM hocki`);
  const monhoc = await query(`SELECT * FROM monhoc`);
  const bachoc = await query(`SELECT * FROM bachoc`);
  const hedaotao = await query(`SELECT * FROM hedaotao`);
  const nganh = await query(`SELECT * FROM nganh`);
  const lop = await query(`SELECT * FROM lop`);
  res.render('data/updateData',{
    user: user,
    khoa: khoa,
    bomon: bomon,
    namhoc: namhoc,
    hocki: hocki,
    monhoc: monhoc,
    bachoc: bachoc,
    hedaotao: hedaotao,
    nganh: nganh,
    lop: lop
  })
}

// module.exports.delKhoa = async function(req, res){
//   const id = req.body.delKhoa;
//   const temp = await query(`SELECT * from bomon WHERE makhoa = '${id}'`);
//   if(temp.length){
//     res.status(404).send({
//       message: "Note not found with id " + req.params.id
//   });
//   }
//   else{
//     connection.query(`DELETE FROM khoa WHERE makhoa = '${id}'`, function (err){
//       if (err) throw err;
//     })
//     res.redirect('/data/updateData');
//   }
// }



module.exports.postData = async function(req, res){
  if(req.body.delKhoa){
    const id = req.body.delKhoa;
    const temp = await query(`SELECT * from bomon WHERE makhoa = '${id}'`);
    if(temp.length){
      res.status(404).send("Không thể xóa, mã khoa đã được sử dụng ở bảng khác");
    }
    else{
      connection.query(`DELETE FROM khoa WHERE makhoa = '${id}'`, function (err){
        if (err) throw err;
      })
      res.redirect('/data/updateData');
    }
  }
  else if(req.body.delBm){
    const id = req.body.delBm;
    const temp = await query(`SELECT * from giangvien WHERE mabm = '${id}'`);
    if(temp.length){
      res.status(404).send("Không thể xóa, mã bộ môn đã được sử dụng ở bảng khác");
    }
    else{
      connection.query(`DELETE FROM bomon WHERE mabm = '${id}'`, function (err){
        if (err) throw err;
      })
      res.redirect('/data/updateData');
    }
  }
  else if(req.body.delNh){
    const id = req.body.delNh;
    const temp = await query(`SELECT * from hocki WHERE namhoc = '${id}'`);
    if(temp.length){
      res.status(404).send("Không thể xóa, năm học đã được sử dụng ở bảng khác");
    }
    else{
      connection.query(`DELETE FROM namhoc WHERE namhoc = '${id}'`, function (err){
        if (err) throw err;
      })
      res.redirect('/data/updateData');
    }
  }
  else if(req.body.delHk){
    const id = req.body.delHk;
    const temp = await query(`SELECT * from decuong WHERE mahk = '${id}'`);
    if(temp.length){
      res.status(404).send("Không thể xóa, học kì đã được sử dụng ở bảng khác");
    }
    else{
      connection.query(`DELETE FROM hocki WHERE hocki = '${id}'`, function (err){
        if (err) throw err;
      })
      res.redirect('/data/updateData');
    }
  }
  else if(req.body.delMh){
    const id = req.body.delMh;
    const temp = await query(`SELECT * from decuong WHERE mamh = '${id}'`);
    if(temp.length){
      res.status(404).send("Không thể xóa, môn học đã được sử dụng ở bảng khác");
    }
    else{
      connection.query(`DELETE FROM monhoc WHERE mamh = '${id}'`, function (err){
        if (err) throw err;
      })
      res.redirect('/data/updateData');
    }
  }
  else if(req.body.delHdt){
    const id = req.body.delHdt;
    const temp = await query(`SELECT * from lop WHERE mahdt = '${id}'`);
    if(temp.length){
      res.status(404).send("Không thể xóa, hệ đào tạo đã được sử dụng ở bảng khác");
    }
    else{
      connection.query(`DELETE FROM hedaotao WHERE mahdt = '${id}'`, function (err){
        if (err) throw err;
      })
      res.redirect('/data/updateData');
    }
  }
  else if(req.body.delBh){
    const id = req.body.delBh;
    const temp = await query(`SELECT * from nganh WHERE mabh = '${id}'`);
    if(temp.length){
      res.status(404).send("Không thể xóa, bậc học đã được sử dụng ở bảng khác");
    }
    else{
      connection.query(`DELETE FROM bachoc WHERE mabh = '${id}'`, function (err){
        if (err) throw err;
      })
      res.redirect('/data/updateData');
    }
  }
  else if(req.body.delNganh){
    const id = req.body.delNganh;
    const temp = await query(`SELECT * from lop WHERE manganh = '${id}'`);
    if(temp.length){
      res.status(404).send("Không thể xóa, ngành đã được sử dụng ở bảng khác");
    }
    else{
      connection.query(`DELETE FROM nganh WHERE manganh = '${id}'`, function (err){
        if (err) throw err;
      })
      res.redirect('/data/updateData');
    }
  }
  else if(req.body.delLop){
    const id = req.body.delLop;
    const temp = await query(`SELECT * from decuong WHERE malop = '${id}'`);
    if(temp.length){
      res.status(404).send("Không thể xóa, lớp đã được sử dụng ở bảng khác");
    }
    else{
      connection.query(`DELETE FROM lop WHERE malop = '${id}'`, function (err){
        if (err) throw err;
      })
      res.redirect('/data/updateData');
    }
  }
  else{
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
    const magv = req.signedCookies.magv;
    const user = await query(`SELECT * FROM giangvien WHERE magv = '${magv}'`);
    const khoa = await query(`SELECT * FROM khoa`);
    const bomon = await query(`SELECT * FROM bomon`);
    const namhoc = await query(`SELECT * FROM namhoc`);
    const hocki = await query(`SELECT * FROM hocki`);
    const monhoc = await query(`SELECT * FROM monhoc`);
    const bachoc = await query(`SELECT * FROM bachoc`);
    const hedaotao = await query(`SELECT * FROM hedaotao`);
    const nganh = await query(`SELECT * FROM nganh`);
    const lop = await query(`SELECT * FROM lop`);
    let errors = [];
    if(req.body.makhoa){
      connection.query(`SELECT * FROM khoa WHERE makhoa = '${req.body.makhoa}'`, function(err, errInput){
        if(errInput.length){
          errors.push("Mã khoa đã tồn tại!");
        }
        if(errors.length){
          res.render('data/updateData.pug',{
            user: user,
            errors: errors,
            khoa: khoa,
            bomon: bomon,
            namhoc: namhoc,
            hocki: hocki,
            monhoc: monhoc,
            bachoc: bachoc,
            hedaotao: hedaotao,
            nganh: nganh,
            lop: lop
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
        }
        if(errors.length){
          res.render('data/updateData.pug',{
            user: user,
            errors: errors,
            khoa: khoa,
            bomon: bomon,
            namhoc: namhoc,
            hocki: hocki,
            monhoc: monhoc,
            bachoc: bachoc,
            hedaotao: hedaotao,
            nganh: nganh,
            lop: lop
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
        if(errInput.length){
          errors.push("Năm học đã tồn tại!");
        }
        if(errors.length){
          res.render('data/updateData.pug',{
            user: user,
            errors: errors,
            khoa: khoa,
            bomon: bomon,
            namhoc: namhoc,
            hocki: hocki,
            monhoc: monhoc,
            bachoc: bachoc,
            hedaotao: hedaotao,
            nganh: nganh,
            lop: lop
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
            bomon: bomon,
            namhoc: namhoc,
            hocki: hocki,
            monhoc: monhoc,
            bachoc: bachoc,
            hedaotao: hedaotao,
            nganh: nganh,
            lop: lop
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
        }
        if(req.body.tclythuyet == "0" && req.body.tcthuchanh == "0"){
          errors.push("Tổng số tín chỉ phải lớn hơn 0!");
        }
        if(errors.length){
          res.render('data/updateData.pug',{
            user: user,
            errors: errors,
            khoa: khoa,
            bomon: bomon,
            namhoc: namhoc,
            hocki: hocki,
            monhoc: monhoc,
            bachoc: bachoc,
            hedaotao: hedaotao,
            nganh: nganh,
            lop: lop
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
        }
        if(errors.length){
          res.render('data/updateData.pug',{
            user: user,
            errors: errors,
            khoa: khoa,
            bomon: bomon,
            namhoc: namhoc,
            hocki: hocki,
            monhoc: monhoc,
            bachoc: bachoc,
            hedaotao: hedaotao,
            nganh: nganh,
            lop: lop
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
        }
        if(errors.length){
          res.render('data/updateData.pug',{
            user: user,
            errors: errors,
            khoa: khoa,
            bomon: bomon,
            namhoc: namhoc,
            hocki: hocki,
            monhoc: monhoc,
            bachoc: bachoc,
            hedaotao: hedaotao,
            nganh: nganh,
            lop: lop
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
        }
        if(errors.length){
          res.render('data/updateData.pug',{
            user: user,
            errors: errors,
            khoa: khoa,
            bomon: bomon,
            namhoc: namhoc,
            hocki: hocki,
            monhoc: monhoc,
            bachoc: bachoc,
            hedaotao: hedaotao,
            nganh: nganh,
            lop: lop
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
        }
        if(errors.length){
          res.render('data/updateData.pug',{
            user: user,
            errors: errors,
            khoa: khoa,
            bomon: bomon,
            namhoc: namhoc,
            hocki: hocki,
            monhoc: monhoc,
            bachoc: bachoc,
            hedaotao: hedaotao,
            nganh: nganh,
            lop: lop
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
  }      
}