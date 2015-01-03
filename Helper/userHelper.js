// Generated by CoffeeScript 1.8.0
(function() {
  var uuid;

  uuid = require("node-uuid");


  /*
      判断是否登录
   */

  exports.isLogin = function(req, res) {
    var isLogin;
    if (req.session) {
      isLogin = req.session.userId ? req.session.userId : false;
      return isLogin;
    } else {
      return false;
    }
  };


  /*
      获取用户信息
   */

  exports.getUserInfo = function(req) {
    var user;
    user = {
      id: req.session.userId,
      email: req.session.userEmail,
      name: req.session.userName,
      avatar: req.session.userAvatar
    };
    return user;
  };


  /*
  	用户信息
   */

  exports.userInfo = {
    userId: uuid.v1(),
    name: "",
    email: "",
    password: "",
    friendList: [],
    sex: "female",
    birthday: "",
    address: "",
    school: "",
    college: "",
    contact: {
      qq: "",
      weixin: {
        name: "",
        qrcode: ""
      }
    },
    personState: "",
    createTime: new Date(),
    avatar: "/image/avatar/default_avatar.jpg"
  };

}).call(this);

//# sourceMappingURL=userHelper.js.map