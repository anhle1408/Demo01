let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "sskpi"
})

module.exports = {


    post: (req, res) => {
         sql0 = " SELECT  username, user_id, fullname, phone, email, access_group, region, branch, department, title, codeEmploye FROM userTable";
        // let fullname = req.body.fullname;
        // let phone = req.body.phone;
        // let email = req.body.email;
        // let accessGroup = req.body.accessGroup;
        // let region = req.body.region;
        // let branch = req.body.branch;
        // let department = req.body.department;
        // let title = req.body.title;
        // let codeEmploye = req.body.codeEmploye;
        // let username = req.body.username;
        // con.query(sql0, function (err, result) {
        //     if (err) throw err;
        //     if (fullname == []) {
        //         return res.status(401).json({ data: false, message: "" })
        //     }
        //     else {
        //         let sql = " SELECT * FROM usertable Where email = '" + username + "'";
        //         con.query(sql, (err, results) => {
        //             console.log(results.length)
        //             if (err) {
        //                 return res.status(400).json({ data: false, message: err.message });
        //             }
        //             if(d){

        //             }
        //         })
        //     }
        // })

        con.query(sql0, function (err, results) {
            results.forEach(user => {
                console.log(user.username)

            });
            for (let index = 0; index < results.length; index++) {
                var user = results[index];
                console.log(user)
                console.log(user.username)
                let fullname = req.body.fullname;
                let phone = req.body.phone;
                let email = req.body.email;
                let accessGroup = req.body.accessGroup;
                let region = req.body.region;
                let branch = req.body.branch;
                let department = req.body.department;
                let title = req.body.title;
                let codeEmploye = req.body.codeEmploye;
                let username = req.body.username;
                if (username !== user.username) {

                    let sql1 = "insert into userTable( username, fullname, phone, email, access_group, region, branch, department, title, codeEmploye) value ('" + username + "','" + fullname + "', '" + phone + "', '" + email + "', '" + accessGroup + "', '" + region + "', '" + branch + "', '" + department + "', '" + title + "', '" + codeEmploye + "' ) ";
                    con.query(sql1)


                    //break;
                }
                else if (username === user.username) {
                    let sql2 = "update userTable set fullname='" + fullname + "',phone='" + phone + "',email='" + email + "',access_group='" + accessGroup + "',region='" + region + "',branch='" + branch + "',department='" + department + "',title='" + title + "',codeEmploye='" + codeEmploye + "' where username='" + username + "'  "
                    con.query(sql2)

                }
            }
        })


        // let fullname = req.body.fullname;
        // let phone = req.body.phone;
        // let email = req.body.email;
        // let accessGroup = req.body.accessGroup;
        // let region = req.body.region;
        // let branch = req.body.branch;
        // let department = req.body.department;
        // let title = req.body.title;
        // let codeEmploye = req.body.codeEmploye;
        // let username = req.body.username;
        //   con.query(sql0, function (err, results0) {

        //   console.log(results0) 

        //   if (err) throw err;
        // if (username !== user.username) {
        // let sql = "insert into userTable( username, fullname, phone, email, access_group, region, branch, department, title, codeEmploye) value ('" + username + "','" + fullname + "', '" + phone + "', '" + email + "', '" + accessGroup + "', '" + region + "', '" + branch + "', '" + department + "', '" + title + "', '" + codeEmploye + "' ) ";
        //con.query(sql, function (err, results) {
        // console.log(fullname) 

        // if (err) {
        //     console.log(err)
        //    return res.status(401).json({ data: false });
        //   }
        //   return res.status(200).json({ data: results })
        //   })
        // }

        //    })
        // },
        // update: (req, res) => {
        // let { fullname, phone, email, accessGroup, region, branch, department, title, codeEmploye} = req.body;
        // let username = req.body.username;

        // let sql = "update userTable set fullname='" + fullname + "',phone='" + phone + "',email='" + email + "',access_group='" + accessGroup + "',region='" + region + "',branch='" + branch + "',department='" + department + "',title='" + title + "',codeEmploye='" + codeEmploye + "' where username='" + username + "'  "
        //  con.query(sql, function (err, result) {
        //     if (err) {
        //         console.log(err)
        //         return res.status(401).json({ data: false });
        //     }
        //     return res.status(200).json({ data: results })
        //  })
    }
}