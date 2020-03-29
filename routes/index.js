let router = require('koa-router')();

let crypto = require("crypto");
let SECRET = "jkb534726781"

const sign = (body) => {
    return `sha1=${crypto.createHmac("sha1", SECRET).update(body).digest("hex")}`
}


router.get('/', function* (next) {
    yield this.render('index', {
        title: 'Hello World Koa!'
    });
});

router.get("/deploy", function* (next) {
    this.body = this
})


router.get('/foo', function* (next) {
    yield this.render('index', {
        title: 'Hello World foo!'
    });
});


router.post("/deploy", function*(next) {
    this.body = this
})


module.exports = router;
