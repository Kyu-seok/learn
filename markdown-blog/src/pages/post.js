import React from "react";
import { Redirect } from "react-router-dom";
import Markdown from "react-markdown";
import Layout from "../components/layout";
import postlist from "../posts.json";
import "./pages.css";
import "../global.css";

const Post = (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  postlist.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }
  return (
    <Layout>
        <div>
      <div className="post">
        <div className="post-header">
          <h1>{fetchedPost.title}</h1>
          <p className="meta">
            Published on {fetchedPost.date} by {fetchedPost.author}
          </p>
        </div>
        <br />
        <br />
        <br />
        <Markdown children={fetchedPost.content} escapeHtml={false} />
        <br />
        <br />
        <br />
      </div>
      <hr />
      </div>
    </Layout>
  );
};

export default Post;
