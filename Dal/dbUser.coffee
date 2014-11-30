dbHelper = require('../Helper/dbHelper')
mongodb = dbHelper.newDb();
mongojs = require('mongojs');
ObjectId = mongojs.ObjectId;

###
    注册
###
exports.register = (user, cb) ->
	##存瑞Mongodb的文档
	dbHelper.connectDB "userInfo", cb, (collection) ->
		collection.findOne user, (err, doc) ->
			if doc
				cb new Error("已经存在该用户")
				mongodb.close()
			else
				collection.insert user, {
					safe: true
				}, (err, u) ->
					if err
						cb new Error("注册失败")
					else
						cb null, u
					mongodb.close()


###
    登录
###
exports.login = (user, cb) ->
	dbHelper.connectDB "userInfo", cb, (collection) ->
		collection.findOne user, (err, doc)->
			mongodb.close()
			if err
				cb new Error("登录失败")
			else
				cb null, doc