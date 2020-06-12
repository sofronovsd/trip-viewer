import React from "react";
import PostList from "../post-list/PostList";
import {posts} from "../../data/posts";

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <PostList posts={posts}/>
        </div>
    )
};

export default HomePage;
