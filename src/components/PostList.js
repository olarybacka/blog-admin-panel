import React from "react"

export default ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
)

const Post = ({ title, content }) => (
  <div className="post">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
)
