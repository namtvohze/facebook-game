var express = require('express');
var router = express.Router();
var ejs = require('ejs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
    ejs.renderFile(__dirname+'/../views/index.ejs', { title: 'Express' }, {}, function(err, str){
        res.end(str);
    });
});

module.exports = router;
