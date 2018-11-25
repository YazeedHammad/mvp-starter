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
  foodName: {type : String, unique : true},
  price: {type : Number, unique : false}
});

var Item = mongoose.model('Item', itemSchema);

var save = (data, callback) => {
  var item = new Item({foodName: 'foodName321', price: 123});
  item.save(function(err, data) {
    if(err){
      callback(err, null);
    } else {
      callback(null, data);
      console.log("Thanks For Your Suggestions" + data);
    }
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