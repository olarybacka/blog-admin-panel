import React, { Component } from "react"
import "./App.css"
import NewBlogForm from "./components/NewBlogForm"
import PostList from "./components/PostList"
class App extends Component {
  render() {
    const { posts, currentPost, postChangeHandler } = this.props
    return (
      <div className="App">
        <NewBlogForm
          currentPost={currentPost}
          postChangeHandler={postChangeHandler}
        />
        <PostList posts={posts} />
      </div>
    )
  }
}

export default App
