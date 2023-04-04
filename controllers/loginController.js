let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "sskpi"
})
module.exports = {
    post: (req, res) => {
        let userName = req.body.username;
        let passWord = req.body.password;
        let sql = " SELECT * FROM userTable Where username = '" + userName + "'";
        con.query(sql, function (err, results) {
            if (err) throw err;
            let user = results[0];
            //console.log(results);
            if (user == undefined) {
                return res.status(401).json({ data: false, message: "tai khoan ko ton tai" })
            } else if (user.password != passWord)
                return res.status(401).json({ data: false, message: "mat khau khong dung" })
            else
                return res.json({ data: user, message: "dang nhap thanh cong" })

        })
    }
}