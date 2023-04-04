'use strict';

module.exports = function (app) {

  let loginCtrl = require('./controllers/loginController')
  let passwordCtrl = require('./controllers/passController')
  let addCtrl = require('./controllers/addController')
  let getlist = require('./controllers/getlist')
  let fixCtrl = require('./controllers/fixController')
  let deleteCtrl = require('./controllers/deleteController')
  let detailCtrl = require('./controllers/detail')
  //let updatefileExcel = require('./controllers/updatefileExcel')

  app.route('/login')
    .post(loginCtrl.post)

  app.route('/passwordpage')
    .patch(passwordCtrl.update);

  app.route('/add')
    .post(addCtrl.post)
   // .get(addCtrl.get)

  app.route('/personnel')
    .get(getlist.get)



  app.route('/delete')
    .delete(deleteCtrl.delete)

  app.route('/fix')
    .put(fixCtrl.update)

  // app.route('/updatefileExcel')
  // .put(updatefileExcel.update)

  app.route('/detail')
    .get(detailCtrl.get)
};

