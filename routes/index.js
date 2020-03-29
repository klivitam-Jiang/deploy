var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});


router.get("/deploy",function *(next) {
  console.log("lailema?")
  yield this.render('index', {
    title: '来了吗？!'
  });

})

module.exports = router;
