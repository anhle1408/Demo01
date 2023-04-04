let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "sskpi"
})
module.exports = {
    update: (req, res) => {
        let userId = req.body.userid;
        let password = req.body.password;
        let passWord = req.body.password;
        let newPass = req.body.newpassword;
        let newPassword = req.body.newPassword;
        
        let sql = "SELECT * FROM userTable Where user_id = '" + userId + "'";

        con.query(sql, function (err, result) {
            
            if (err) throw err;
            if (password != passWord) {
                
                return res.status(401).json({ data: false, message: "mat khau khong dung !!!" })
            }
            else if (passWord == newPass) {
                return res.status(401).json({ data: false, message: "mat khau khong thay doi !!!" })
            }
            else if (newPassword != newPass) {
                return res.status(401).json({ data: false, message: "nhap lai mat khau !!!" })
            }
            else {
                // console.log(newPass, userId)
                sql = "UPDATE userTable SET password = '" + newPass + "' WHERE user_id = '" + userId + "'";
                con.query(sql, function (err) {
                    if (err) {
                        console.log(err)
                        return res.status(401).json({ data: false, message: "doi mat khau that bai" });
                    }

                    return res.status(200).json({ data: true, message: "doi mat khau thanh cong" })
                })
            }


        })
    }
}
