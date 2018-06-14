// 获取需要的部件
const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Articles = require('../models/articles');

// 链接数据库
mongoose.connect('mongodb://127.0.0.1:27017/Nuxt');

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected success.');
});

mongoose.connection.on('error', () => {
  console.log('MongoDB connected fail.');
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB connected disconnected.');
});

function getWrong(res, err) {
  return res.json({
    status: 1,
    msg: err.message,
    result: '',
  });
}

function getRight(res, doc) {
  return res.json({
    status: 0,
    msg: '',
    result: doc,
  });
}

router.get('/', (req, res, next) => {
  Articles.find({}, (err, doc) => {
    if (err) {
      getWrong(res, err);
    } else {
      getRight(res, doc);
    }
  });
});

// 文章详情
router.post('/Details', (req, res, next) => {
  const { title } = req.body;
  Articles.findOne({ title }, (err, doc) => {
    if (err) {
      getWrong(res, err);
    } else {
      getRight(res, doc);
    }
  });
});

//  文章列表
router.get('/allList', (req, res, next) => {
  Articles.find({}, 'title', (err, doc) => {
    if (err) {
      getWrong(res, err);
    } else {
      getRight(res, doc);
    }
  });
});

// 文章分类下的列表
router.get('/typeList', (req, res, next) => {
  const { classSecond } = req.query;
  Articles.find({ classSecond }, 'title', (err, doc) => {
    if (err) {
      getWrong(res, err);
    } else {
      getRight(res, doc);
    }
  });
});
// 暴露结果
module.exports = router;
