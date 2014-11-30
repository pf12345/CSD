uuid = require("node-uuid")
###
    判断是否登录
###
exports.isLogin = (req, res) ->
	if req.session
		isLogin = if req.session.userId then req.session.userId else false
		return isLogin
	else
		return false

###
    获取用户信息
###
exports.getUserInfo = (req) ->
	user =
		id: req.session.userId
		email: req.session.userEmail
		name: req.session.userName
		avatar: req.session.userAvatar
	return user

###
	用户信息
###
exports.userInfo =
	userId: uuid.v1()
	name: ""
	email: ""
	password: ""
	friendList: []
	sex:  "female"   ## female:女，male：男
	birthday: ""
	address: ""
	school: ""
	college: ""
	contact:
        qq: ""
        weixin:
            name: ""
            qrcode: ""
	personState: ""
	createTime: new Date()
	avatar: "/image/avatar/default_avatar.jpg"