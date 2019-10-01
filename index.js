var express = require('express');
var app = express();
var http = require('http').Server(app);
var Item = require('./public/models/item.js')
const path = require('path');
// const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));

app.all('/item/all', function (req, res) {
    readfile(req, res)
})
app.all('/item/:id', function (req, res) {
    
})
app.all('/item/create', function (req, res) {
    Item.save({item: req.query.item,  qty: req.query.qty, priorityNum: req.query.priority},function(err){
        if (err) return handleError(err);
    })
})

app.use(express.static(path.resolve('./public')))
http.listen(3000);
console.log("Running...")
