let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "sskpi"
})

module.exports = {
    get: (req, res) => {
        let user_id = req.query.user_id;
        sql = " SELECT   fullname, phone, email, access_group, region, branch, department, title, codeEmploye,sex,Date_birth,Address, socialNetwork, nationality, permanentAddress, place_origin  FROM userTable WHERE user_id = '" + user_id + "'";
        //console.log(user_id)
        con.query(sql, function (err, results) {
            if (err) throw err;
            return res.status(200).json({ data: results })

        })
    },


}
