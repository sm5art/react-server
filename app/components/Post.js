"use strict";

var React = require('react');

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:props.post._id.toString(),
      author:props.post.author,
      post:props.post.post
    };
  }
  render() {
    return <div>
        <h1>Id: {this.state.id}</h1>
        <h2>Post: {this.state.post}</h2>
        <h3>Author : {this.state.author}</h3>
      </div>;
  }
}

module.exports = Post;
