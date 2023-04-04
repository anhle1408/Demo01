// var express = require('express');
// var app = express();
// var mysql = require('mysql');


// var con = mysql.createConnection({
//     host: "locahost",
//     username: "root",
//     password: "123456789",
//     database: "sskpi"
// });


// module.exports = {
//     post: (req, res) => {
//         var username = req.body.username;
//         var password = req.body.password;
//         var sql = " SELECT * FROM sskpi.user Where Username = '" + username + "'";
//         con.query(sql, function (err, results) {
//             if (err) throw err;
//             console.log(results);
//             var user = results[0];
//             if (user == undefined) {
//                 return res.status(401).json({ data: false, message: "tai khoan ko ton tai" })
//             } else if (user.Password != password)
//                 return res.status(401).json({ data: false, message: "mat khau khong dung" })
//             else
//                 return res.json({ data: true, message: "dang nhap thanh cong" })
//         })
//     }
// }
