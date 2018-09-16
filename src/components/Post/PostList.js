import React from "react"
import "./styles/post.css"

export default ({ posts }) => (
  <div className="posts">
    {posts.map((post, i) => (
      <Post key={i} {...post} />
    ))}
  </div>
)

const Post = ({ title, content }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}
