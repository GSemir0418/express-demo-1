var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // 渲染index.ejs，传递的参数为title
  res.render('index', { title: 'Hello Express' });
});

module.exports = router;
