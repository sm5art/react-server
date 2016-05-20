var Post = require('./models/Post');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/norum');
var count = 20;
while(--count){
  var a = new Post({
    author:"the one and only",
    post:"number " + count
  });
  a.save(function(err){
    if(!err){
      console.log("success  ");
    }
  })
}
