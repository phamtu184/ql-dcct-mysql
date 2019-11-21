const cloudinary = require('cloudinary');
const mysql = require('mysql');
const dbconfig = require('../database/dbconfig').default.default;
const connection = mysql.createConnection(dbconfig.connection);
const util = require('util');
const query = util.promisify(connection.query).bind(connection);

module.exports.listFile = async function(req, res){
  const magv = req.signedCookies.magv;
  const user = await query(`SELECT * FROM giangvien WHERE magv = '${magv}'`);
  const lop = await query(`SELECT * FROM lop`);
  const monhoc = await query(`SELECT * FROM monhoc`);
  const hocki = await query(`SELECT * FROM hocki`);
  connection.query(`SELECT decuong.madc AS madc ,decuong.linkfile AS linkfile, decuong.ngaytai AS ngaytai, lop.tenlop AS tenlop, monhoc.tenmh AS tenmh, hocki.tenhk AS tenhk
  FROM decuong JOIN lop ON decuong.malop = lop.malop JOIN monhoc ON decuong.mamh = monhoc.mamh JOIN hocki ON decuong.mahk = hocki.mahk WHERE decuong.magv='${magv}'`, function (err, file){
    res.render('file/myFile.pug',{
      user: user,
      file: file,
      lop: lop,
      monhoc: monhoc,
      hocki: hocki
    });
  })
}

module.exports.deleteFile = async function(req, res, next){
  const id = req.params.id;
  connection.query(`SELECT * FROM decuong WHERE madc = '${id}'`, function (err, file){
    if(file){
      cloudinary.uploader.destroy(file[0].publicId, function(result) { console.log(result) }, {invalidate: true, resource_type: "raw"});
      connection.query(`DELETE FROM decuong WHERE madc = '${id}'`, function (err, deldecuong){
        if (err) throw err;
        res.redirect('/file/myFile');
      })
    }
    else{res.redirect('/file/myFile')}
  })
}

module.exports.findFile = async function(req, res, next){
  const magv = req.signedCookies.magv;
  const user = await query(`SELECT * FROM giangvien WHERE magv = '${magv}'`);
  const gv = await query(`SELECT * FROM giangvien`);
  const hk = await query(`SELECT * FROM hocki`);
  res.render('file/findFile.pug',{
    user: user,
    gv: gv,
    hk: hk
  })
}

module.exports.postListFile = async function(req, res){
  let errors = [];
  if(req.body.knmalop){
    cloudinary.uploader.upload(req.file.path, async function(result){
      let date = result.created_at.slice(0,10);
      let madecuong = req.body.knmalop+req.body.knmamh+req.body.knmahk;
      let decuong ={
        "madc": madecuong,
        "malop": req.body.knmalop,
        "mamh": req.body.knmamh,
        "mahk": req.body.knmahk,
        "magv": req.signedCookies.magv,
        "linkfile": result.url,
        "ngaytai": date,
        "publicId": result.public_id
      }
      connection.query(`SELECT * FROM decuong WHERE madc = '${madecuong}'`, function(err, errInput){
        if (errInput.length){
          res.send("Đề cương đã tồn tại");
        }
        else{
          connection.query('INSERT INTO decuong SET ?', decuong, function (err, decuong){
            if (err) throw err;
          });
          res.redirect('/file/myFile')
        }
      })
    }, {resource_type: "raw", use_filename:true, unique_filename: true});
  }
}

module.exports.postFindFile = async function(req, res, next){
  let info = [];
  const magv = req.signedCookies.magv;
  const hktofind = req.body.hktofind;
  const gvtofind = req.body.gvtofind;
  const user = await query(`SELECT * FROM giangvien WHERE magv = '${magv}'`);
  const gv = await query(`SELECT * FROM giangvien`);
  const hk = await query(`SELECT * FROM hocki`);
  const tenhocki = await query(`SELECT tenhk FROM hocki WHERE mahk = '${hktofind}'`);
  const tengiangvien = await query(`SELECT tengv FROM giangvien WHERE magv = '${gvtofind}'`);

  if(!hktofind && !gvtofind){
    res.redirect('/file/findFile')
  }
  else if(hktofind && gvtofind){
    info.push(`Thống kê đề cương của học kì: ${tenhocki[0].tenhk} và giảng viên: ${tengiangvien[0].tengv}`);
    connection.query(`SELECT decuong.linkfile AS linkfile, decuong.ngaytai AS ngaytai, lop.tenlop AS tenlop, monhoc.tenmh AS tenmh, giangvien.tengv AS tengv, hocki.tenhk AS tenhk
    FROM decuong JOIN lop ON decuong.malop = lop.malop JOIN monhoc ON decuong.mamh = monhoc.mamh JOIN giangvien ON decuong.magv = giangvien.magv JOIN hocki ON decuong.mahk = hocki.mahk
    WHERE hocki.mahk='${hktofind}' AND giangvien.magv='${gvtofind}'`, function (err, file){
      res.render('file/findFile.pug',{
        user: user,
        file: file,
        gv: gv,
        hk: hk,
        info: info
      });  
    })
  }
  else{
    if(!gvtofind){
      info.push(`Thống kê đề cương của học kì: ${tenhocki[0].tenhk}`);
      connection.query(`SELECT decuong.linkfile AS linkfile, decuong.ngaytai AS ngaytai, lop.tenlop AS tenlop, monhoc.tenmh AS tenmh, giangvien.tengv AS tengv, hocki.tenhk AS tenhk
      FROM decuong JOIN lop ON decuong.malop = lop.malop JOIN monhoc ON decuong.mamh = monhoc.mamh JOIN giangvien ON decuong.magv = giangvien.magv JOIN hocki ON decuong.mahk = hocki.mahk
      WHERE hocki.mahk='${hktofind}'`, function (err, file){
        res.render('file/findFile.pug',{
          user: user,
          file: file,
          gv: gv,
          hk: hk,
          info: info
        }); 
      })
    }
    if(!hktofind){
      info.push(`Thống kê đề cương của giảng viên: ${tengiangvien[0].tengv}`);
      connection.query(`SELECT decuong.linkfile AS linkfile, decuong.ngaytai AS ngaytai, lop.tenlop AS tenlop, monhoc.tenmh AS tenmh, giangvien.tengv AS tengv, hocki.tenhk AS tenhk
      FROM decuong JOIN lop ON decuong.malop = lop.malop JOIN monhoc ON decuong.mamh = monhoc.mamh JOIN giangvien ON decuong.magv = giangvien.magv JOIN hocki ON decuong.mahk = hocki.mahk
      WHERE giangvien.magv='${gvtofind}'`, function (err, file){
        res.render('file/findFile.pug',{
          user: user,
          file: file,
          gv: gv,
          hk: hk,
          info: info
        });          
      })
    }
  }
}