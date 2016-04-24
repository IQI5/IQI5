var express = require('express');
var router = express.Router();

var musicDao = require('../dao/musicDao');

// 异步接口 上传音乐
router.post('/uploadMusic', function(req, res, next) {
	musicDao.add(req, res, next);
});

// 异步接口 获取用户的音乐列表
router.get('/getAll', function(req, res, next) {
	musicDao.getAll(req, res, next);
})

module.exports = router;
