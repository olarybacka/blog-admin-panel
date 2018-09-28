import React, { Component } from "react"
import "./styles/post.css"
import { fetchPosts, deletePost } from "../../reducers/post"
import { connect } from "react-redux"

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    return (
      <div className="posts">
        {this.props.posts.map(post => (
          <Post key={post.id} {...post} deletePost={this.props.deletePost}/>
        ))}
      </div>
    )
  }
}

const Post = ({ title, content, id, deletePost }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={() => deletePost(id)}>X</button>
    </div>
  )
}

export default connect(
  state => ({ posts: state.posts }),
  { fetchPosts, deletePost }
)(PostList)
