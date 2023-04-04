let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "sskpi"
})

module.exports = {
    delete: (req, res) => { 
        console.log(req)
        let user_id = req.query.user_id;

        let slqQuery = "DELETE FROM userTable WHERE user_id = '" + user_id + "'";
        con.query(slqQuery, function (err, results) {
            if (err) throw err;
            return res.status(200).json({ data: results})
        })
    }
}