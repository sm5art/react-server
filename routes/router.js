var React = require('react');
var ReactDOM = require('react-dom/server')
var PostController = require('../app/controllers/PostController');
var Post = React.createFactory(require('../app/components/Post'));

module.exports = function(app){
  app.get('/', PostController.ListPosts,function(req,res){
    var ReactHtml = "";
    for(var i in res.posts){
      ReactHtml += ReactDOM.renderToString(Post({post:res.posts[i]}));
    }
    res.render('index.ejs',{ReactRendered:ReactHtml})
  });
}
