import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    clickedPost: {}
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const posts = res.data.slice(0, 4);
      this.setState({ posts });
    });
  }

  selectPostHandler = id => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({ clickedPost: res.data[id - 1] });
    });
  };

  render() {
    const posts = this.state.posts.map(post => (
      <Post
        key={post.id}
        title={post.title}
        click={() => this.selectPostHandler(post.id)}
      />
    ));

    return (
      <div>
        <nav className="Blog">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/new-post">New Post</a>
            </li>
          </ul>
        </nav>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost
            id={this.state.clickedPost.id}
            title={this.state.clickedPost.title}
            content={this.state.clickedPost.body}
          />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
