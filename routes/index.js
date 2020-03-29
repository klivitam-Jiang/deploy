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

router.get('/foo', function* (next) {
    yield this.render('index', {
        title: 'Hello World foo!'
    });
});

router.post("/deploy", function(next) {
    let body = this.body;
    console.log("==============body")
    console.log("body",body);
    console.log("==============header")
    console.log("request",this.request.headers)
    console.log("==============header")
})


router.get("/deploy", function* (next) {
    console.log("==============header")
    console.log("header:", this.request.headers)
    console.log("==============header")
    console.log("=============request")
    console.log(this.request)
    console.log("==========request end")

    yield this.render('index', {
        title: '来了吗？1!'
    });

})

module.exports = router;
