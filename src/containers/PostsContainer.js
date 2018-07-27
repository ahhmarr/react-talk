import React, { Component } from "react";
import Post from "../components/Post";
class PostContainer extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        this.setState({
          ...this.state,
          posts: json
        });
      });
  }
  deletePost(index){
    const newPosts = [...this.state.posts];
    newPosts.splice(index,1)
    this.setState({
      ...this.state,
      posts : newPosts
    })
  }
  render() {
    return (
      <Post posts={this.state.posts} deleteHandler={this.deletePost.bind(this)} />
    )
  }
}
export default PostContainer;
