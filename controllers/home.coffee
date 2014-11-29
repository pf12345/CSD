app = require('express')();
http = require('http').Server(app);
io = require('socket.io')(http);

exports.index = (req, res)->
	res.render "index"

io.on 'connection', (socket)->
	console.log('a user connected')
	socket.on 'new message', (data)->
		socket.broadcast.emit 'new message', {
			username: "payne",
			message: "this is a test"
		}
