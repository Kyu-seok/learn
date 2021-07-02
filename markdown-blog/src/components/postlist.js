import React from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import postlist from "../posts.json";
import Button from "react-bootstrap/Button";
import "../global.css";
import "./components.css";


const PostList = () => {
  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 70).join(" ");
  });
  console.log(excerptList);
  console.log(postlist);
  return (
    <div className="postlist">
      {postlist.length &&
        postlist.map((post, i) => {
          return (
            <div>
              <div key={i} className="post-card">
                <h1>
                  <Link className="links" to={`/post/${post.id}`}>
                    {post.title}
                  </Link>
                </h1>
                <p className="meta">Published on {post.date}</p>
                <Markdown children={excerptList[i]} />
                <Link to={`/post/${post.id}`}>
                  <button type="button">Continue reading </button>
                </Link>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
