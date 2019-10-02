var express = require('express');
var app = express();
var http = require('http').Server(app);
var Item = require('./public/models/item.js')
const path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.all('/all', function (req, res) {
    Item.find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    })
})
app.get('/', function (req, res) {
    Item.find({}, function (err, result) {
        res.render("index.pug", { items: result });
    });
});

app.post('/create', function (req, res) {
    var item = new Item({
        item: req.body.item,
        qty: req.body.qty,
        priority: req.body.priority
    })
    item.save()
        .then(item => {
            console.log(item)
        })
        .catch(err => {
            console.error(err)
        })
})

app.use(express.static('public'))
http.listen(3000);
console.log("Running...")
