var express = require('express');
var router = express.Router();

var musicDao = require('../dao/musicDao');

router.get('/', function(req, res, next) {
	res.render('index');
})

// 异步接口 上传音乐
router.post('/uploadMusic', function(req, res, next) {
	musicDao.add(req, res, next);
});

// 异步接口 获取用户的音乐列表
router.get('/getAllMusic', function(req, res, next) {
	musicDao.queryAll(req, res, next);
})

module.exports = router;

