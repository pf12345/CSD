userHelper = require("../Helper/userHelper");
userBll = require("../Bll/userBll");
moment = require("moment");
moment.lang("zh-cn");

###
    注册
    @param name
    @param email
    @param password
###
exports.register_GET_POST = (req, res) ->
	if req.method is  "POST"
		user = userHelper.userInfo
		user.name = req.body.name
		user.email = req.body.email
		user.password = req.body.pwd
		userBll.register user,(err, result)->
			if err
				res.send
					code: 1
					message: err.message
			else
				setSession(req, result[0])
				res.send
					code: 0
					message: '注册成功'
	else
		res.render "register",
			isLogin: true


###
    登录
    @param email
    @param password
###
exports.login_GET_POST = (req, res) ->
	if req.method is "POST"
		user =
			email : req.body.email
			password : req.body.pwd
		userBll.login user, (err, result)->
			if err
				res.send
					code: 1
					message: err.message
			else if !result
				res.send
					code: 1
					message: '用户不存在,请注册后登录'
			else
				setSession(req, result)
				res.send
					code: 0
					message: '登录成功'
					result: result

###
    退出登录
###
exports.signOut = (req, res) ->
	res.session.clear();
	res.redirect "/"

###
    创建session
###
setSession = (req, result) ->
	req.session.userId = result.userId
	req.session.userName = result.name
	req.session.userEmail = result.email
	req.session.userAvatar = result.avatar