var cloudinary = require('cloudinary');
var mysql = require('mysql');
let shortid = require('shortid');
var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE
});
connection.connect();

module.exports.listFile = async function(req, res){
  const magv = req.signedCookies.magv;
  connection.query(`SELECT * FROM decuong WHERE magv = '${magv}'`, function (err, file){
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

module.exports.postListFile = async function(req, res){
  const magv = req.signedCookies.magv;
  if(req.body.tendc){
    cloudinary.uploader.upload(req.file.path, async function(result){
      let date = result.created_at.slice(0,10);
      let decuong ={
        "madc": shortid.generate(),
        "malop": req.body.knmalop,
        "mamh": req.body.knmamh,
        "mahk": req.body.knmahk,
        "magv": req.signedCookies.magv,
        "tendc": req.body.tendc,
        "linkfile": result.url,
        "ngaytai": date
      }
      connection.query('INSERT INTO decuong SET ?', decuong, function (err, decuong){
        if (err) throw err;
      });
      res.redirect('/file/myFile')
    }, {resource_type: "raw", use_filename:true, unique_filename:false});
  }
}