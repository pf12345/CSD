server = require("../app").server
io = require('socket.io')(server)
userHelper = require("../Helper/userHelper")

exports.index = (req, res)->
	if userHelper.isLogin(req, res)
		res.render "index_login",
			isLogin: userHelper.isLogin(req, res)
	else
		res.render "index"

io.on 'connection', (socket)->
	console.log('a user connected');
	socket.on 'disconnect', ()->
		console.log('user disconnected')
	socket.on 'chat message', (msg)->
        io.emit 'chat message success', msg

