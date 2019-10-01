var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groceries', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

var ItemSchema = new mongoose.Schema({
    item: { type: String, required: true },
    qty: { type: Number, required: true },
    priority: { type: Number, required: true },
})

var Item = mongoose.model('Item', ItemSchema);
module.exports = Item;