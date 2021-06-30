import React from "react"
import Markdown from "react-markdown"
import postlist from "../posts.json"

import "./components.css"

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ")
    })
    console.log(excerptList)
    console.log(postlist)
    return (
        <div className="postlist">
            <h1 className="title">All Posts</h1>
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                            <h2>{post.title}</h2>
                            <small>Published on {post.date}</small>
                            <hr/>
                            <Markdown children={excerptList[i]} />
                            <small>Read more...</small>
                        </div>
                    )
                })
            }
        </div>
    ) 
}

export default PostList;