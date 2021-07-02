import React from "react"
import Layout from "../components/layout"
import PostList from "../components/postlist"
import "./pages.css"
import "../global.css"

const Home = () => {
    return (
        <div>
            <Layout>
                <div className="call-out">
                    <p>Welcome to my Blog!!</p>
                </div>
                <PostList />
            </Layout>
        </div>
    )
}

export default Home;