const cloudinary = require('cloudinary');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT
});
connection.connect();
module.exports.listFile = async function(req, res){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT decuong.madc AS madc ,decuong.linkfile AS linkfile, decuong.ngaytai AS ngaytai, lop.tenlop AS tenlop, monhoc.tenmh AS tenmh, hocki.tenhk AS tenhk
   FROM decuong JOIN lop ON decuong.malop = lop.malop JOIN monhoc ON decuong.mamh = monhoc.mamh JOIN hocki ON decuong.mahk = hocki.mahk WHERE decuong.magv='${magv}'`, function (err, file){
    connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
      connection.query(`SELECT * FROM lop`, function (err, lop){
        connection.query(`SELECT * FROM monhoc`, function (err, monhoc){
          connection.query(`SELECT * FROM hocki`, function (err, hocki){
            res.render('file/myFile.pug',{
              user: user,
              file: file,
              lop: lop,
              monhoc: monhoc,
              hocki: hocki
            });
          })
        })
      })            
    })
  })
}

module.exports.deleteFile = async function(req, res, next){
  const id = req.params.id;
  connection.query(`SELECT * FROM decuong WHERE madc = '${id}'`, function (err, file){
    if(file){
      cloudinary.uploader.destroy(file[0].madc, function(result) { console.log(result) }, {invalidate: true, resource_type: "raw"});
      connection.query(`DELETE FROM decuong WHERE madc = '${id}'`, function (err, deldecuong){
        if (err) throw err;
        console.log("infoful delete");
        res.redirect('/file/myFile');
      })
    }
    else{res.redirect('/file/myFile')}
  })
}

module.exports.findFile = async function(req, res, next){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
    connection.query(`SELECT * FROM giangvien`, function (err, gv){
      connection.query(`SELECT * FROM hocki`, function (err, hk){
        res.render('file/findFile.pug',{
          user: user,
          gv: gv,
          hk: hk
        })
      })
    })
  })
}

module.exports.postListFile = async function(req, res){
  if(req.body.knmalop){
    cloudinary.uploader.upload(req.file.path, async function(result){
      let date = result.created_at.slice(0,10);
      let decuong ={
        "madc": result.public_id,
        "malop": req.body.knmalop,
        "mamh": req.body.knmamh,
        "mahk": req.body.knmahk,
        "magv": req.signedCookies.magv,
        "linkfile": result.url,
        "ngaytai": date
      }
      connection.query('INSERT INTO decuong SET ?', decuong, function (err, decuong){
        if (err) throw err;
      });
      res.redirect('/file/myFile')
    }, {resource_type: "raw", use_filename:true, unique_filename: true});
  }
}

module.exports.postFindFile = async function(req, res, next){
  let info = [];
  const magv = req.signedCookies.magv;
  const gvtofind = req.body.gvtofind;
  const hktofind = req.body.hktofind;
  connection.query(`SELECT * FROM giangvien WHERE magv = '${magv}'`, function (err, user){
    connection.query(`SELECT * FROM giangvien`, function (err, gv){
      connection.query(`SELECT * FROM hocki`, function (err, hk){
        if(!hktofind && !gvtofind){
          res.redirect('/file/findFile')
        }
        else if(hktofind && gvtofind){
          connection.query(`SELECT tenhk FROM hocki WHERE mahk = '${hktofind}'`, function (err, tenhocki){
            connection.query(`SELECT tengv FROM giangvien WHERE magv = '${gvtofind}'`, function (err, tengiangvien){
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
            })
          })
        }
        else{
          if(!gvtofind){
            connection.query(`SELECT tenhk FROM hocki WHERE mahk = '${hktofind}'`, function (err, tenhocki){
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
            })
          }
          if(!hktofind){
            connection.query(`SELECT tengv FROM giangvien WHERE magv = '${gvtofind}'`, function (err, tengiangvien){
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
            })
          }
        }
      })
    })
  })
}