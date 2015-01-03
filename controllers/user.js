// Generated by CoffeeScript 1.8.0
(function() {
  var moment, setSession, userBll, userHelper;

  userHelper = require("../Helper/userHelper");

  userBll = require("../Bll/userBll");

  moment = require("moment");

  moment.lang("zh-cn");


  /*
      注册
      @param name
      @param email
      @param password
   */

  exports.register_GET_POST = function(req, res) {
    var user;
    if (req.method === "POST") {
      user = userHelper.userInfo;
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = req.body.pwd;
      return userBll.register(user, function(err, result) {
        if (err) {
          return res.send({
            code: 1,
            message: err.message
          });
        } else {
          setSession(req, result[0]);
          return res.send({
            code: 0,
            message: '注册成功'
          });
        }
      });
    } else {
      return res.render("register", {
        isLogin: true
      });
    }
  };


  /*
      登录
      @param email
      @param password
   */

  exports.login_GET_POST = function(req, res) {
    var user;
    if (req.method === "POST") {
      user = {
        email: req.body.email,
        password: req.body.pwd
      };
      return userBll.login(user, function(err, result) {
        if (err) {
          return res.send({
            code: 1,
            message: err.message
          });
        } else if (!result) {
          return res.send({
            code: 1,
            message: '用户不存在,请注册后登录'
          });
        } else {
          setSession(req, result);
          return res.send({
            code: 0,
            message: '登录成功',
            result: result
          });
        }
      });
    }
  };


  /*
  	个人设置
      @param req
      @param res
   */

  exports.setprofile = function(req, res) {
    return res.render("setprofile", {
      title: "个人设置"
    });
  };


  /*
      退出登录
   */

  exports.signOut = function(req, res) {
    res.session.clear();
    return res.redirect("/");
  };


  /*
      创建session
   */

  setSession = function(req, result) {
    req.session.userId = result.userId;
    req.session.userName = result.name;
    req.session.userEmail = result.email;
    return req.session.userAvatar = result.avatar;
  };

}).call(this);

//# sourceMappingURL=user.js.map