let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "sskpi"
})
module.exports = {

    update: (req, res) => {
        let { fullname, phone, email, accessGroup, region, branch, department, title, codeEmploye} = req.body;
        let user_id = req.body.user_id;
       
        
        let sql = "update userTable set fullname='" + fullname + "',phone='" + phone + "',email='" + email + "',access_group='" + accessGroup + "',region='" + region + "',branch='" + branch + "',department='" + department + "',title='" + title + "',codeEmploye='" + codeEmploye + "' where user_id='" + user_id + "'  "
        con.query(sql, function (err, result) {
            //console.log(result)
            if (err) return res.status(500).send(err);
            if (result.affectedRows === 0) return res.status(404).send("ko tìm thấy người dùng !");
            return res.status(200).json({ data: true })
        })
    }

}