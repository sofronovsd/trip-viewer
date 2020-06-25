import React from "react";
import Post, {IPost} from "../post/Post";

interface IPostList {
    posts: IPost[]
}

const PostList: React.FC<IPostList> = ({posts}) => {
    return (
        <ul className="post-list">
            {posts.map(post => {
                return (
                    <li key={post.id}>
                        <Post {...post}/>
                    </li>
                )
            })}
        </ul>
    )
};

export default PostList;
