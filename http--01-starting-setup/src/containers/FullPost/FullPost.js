import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  deletePostHandler = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
      .then(res => {
        console.log(res);
      });
  };
  render() {
    let post = <p>Please select a Post!</p>;
    post = (
      <div className="FullPost">
        <h1>{this.props.title || post}</h1>
        <p>{this.props.content || "Content"}</p>
        <div className="Edit">
          <button className="Delete" onClick={this.deletePostHandler}>
            Delete
          </button>
        </div>
      </div>
    );
    return post;
  }
}

export default FullPost;
