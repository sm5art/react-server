var Post = require('../models/Post');

module.exports.ListPosts = function(req,res,next){
  Post.find({},function(err,post){
    if(err){
      next(err);
    }
    if(post)
      res.posts = post;
    next();
  });
};
