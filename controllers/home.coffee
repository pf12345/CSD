server = require("../app").server
io = require('socket.io')(server)

exports.index = (req, res)->
	res.render "index"

io.on 'connection', (socket)->
	console.log('a user connected');
	socket.on 'disconnect', ()->
		console.log('user disconnected')
	socket.on 'chat message', (msg)->
        io.emit 'chat message success', msg

