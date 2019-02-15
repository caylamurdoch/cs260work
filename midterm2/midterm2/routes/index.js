var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Shopping = mongoose.model('Shopping');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.param('product', function(req, res, next, id) {
    var query = Shopping.findById(id);
    query.exec(function(err, product) {
        if (err) { return next(err); }
        if (!product) { return next(new Error("can't find product")); }
        req.product = product;
        return next();
    });
});

router.get('/shopping/:product', function(req, res) {
    res.json(req.product);
});

router.put('/shopping/:product/order', function(req, res, next) {
    console.log("Put Route" + req.product.Name);
    req.product.order(function(err, product) {
        if (err) { return next(err); }
        res.json(product);
    });
});

router.delete('/shopping/:product', function(req, res) {
    req.product.remove();
    res.sendStatus(200);
});

router.get('/shopping', function(req, res, next) {
    console.log("Get Route");
    Shopping.find(function(err, products) {
        if (err) { console.log("Error"); return next(err); }
        res.json(products);
        console.log("res.json Get Route");
    });
    console.log("returningGet Route");
});

router.post('/shopping', function(req, res, next) {
    console.log("Post Route");
    var product = new Shopping(req.body);
    console.log("Post Route");
    console.log(product);
    product.save(function(err, product) {
        console.log("Error " + err);
        if (err) { return next(err); }
        console.log("Post Route before json");
        res.json(product);
    });
});

module.exports = router;
