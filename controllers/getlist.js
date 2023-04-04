let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "sskpi"
})
// let sql = " SELECT fullname, phone, email, access_group, region, branch, department, title, codeEmploye FROM userTable";
module.exports = {
    get: (req, res) => {

        sql = " SELECT  username, user_id, fullname, phone, email, access_group, region, branch, department, title, codeEmploye FROM userTable";
        con.query(sql, function (err, results) {

            if (err) throw err;
            return res.status(200).json({ data: results })
        })
    },


}
