var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  foodName: String,
  price: Number
});

var Item = mongoose.model('Item', itemSchema);

var save = (data) => {
  var item = new Item(data);
  item.save(function(err) {
    if(err){
      console.log(err);
    }
    console.log("Thanks For Your Suggestions")
  });
}

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;