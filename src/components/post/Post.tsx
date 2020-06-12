import React from "react";

export interface IPost {
    readonly id: string,
    title: string,
    img?: string,
    author: string,
    text: string
}

const Post: React.FC<IPost> = (post: IPost) => {
    return (
        <div className="card">
            <span className="card-title">{post.title}</span>
            <div className="card-content">
                <p>{post.text}</p>
                <p>{post.author}</p>
            </div>
            <div className="card-action">
                <a href="/"><i className="material-icons">thumb_up</i>Like</a>
            </div>
        </div>
    )
};

export default Post;
