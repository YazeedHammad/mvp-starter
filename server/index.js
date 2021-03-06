var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo/index.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: false }))
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.post('/items' , function(req, res) {
  console.log('rb: ', req.body)
  items.save(req.body, function(err, data){
    res.send(data);
  })
})

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);

    } else {
      res.json(data);
    }
  });
});

var port = process.env.PORT || 3010;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

