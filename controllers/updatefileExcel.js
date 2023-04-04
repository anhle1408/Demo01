let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "sskpi"
})
module.exports = {

    update: (req, res) => {
        let { fullname, phone, email, accessGroup, region, branch, department, title, codeEmploye } = req.body;
        let username = req.body.username;
        let sql = "update userTable set fullname='" + fullname + "',phone='" + phone + "',email='" + email + "',access_group='" + accessGroup + "',region='" + region + "',branch='" + branch + "',department='" + department + "',title='" + title + "',codeEmploye='" + codeEmploye + "' where username='" + username + "'  "
        con.query(sql, function (err, result) {
            if (err) return res.status(500).send(err);
            if (result.affectedRows === 0) return res.status(404).send("ko tìm thấy người dùng !");
            return res.status(200).json({ data: true })
        })
    }

}