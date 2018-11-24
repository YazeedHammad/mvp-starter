var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
mongoose.connect('yazeed:yazeed92@ds041167.mlab.com:41167/food_menu');

//mongodb://<dbuser>:<dbpassword>@ds041167.mlab.com:41167/food_menu
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

module.exports.save = save;
module.exports.selectAll = selectAll;