import React, { Component } from "react"
import "./styles/post.css"
import { fetchPosts } from "../../reducers/post"
import { connect } from "react-redux"

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    return (
      <div className="posts">
        {this.props.posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>
    )
  }
}

const Post = ({ title, content }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default connect(
  state => ({ posts: state.posts }),
  { fetchPosts }
)(PostList)
