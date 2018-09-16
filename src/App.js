import React, { Component } from "react"
import "./App.css"
import AddPost from "./components/Post/AddPost"
import PostList from "./components/Post/PostList"
class App extends Component {
  render() {
    const { posts, currentPost, postChangeHandler, handleSubmit, addPost2 } = this.props
    return (
      <div className="App">
        <AddPost
          currentPost={currentPost}
          postChangeHandler={postChangeHandler}
          handleSubmit={handleSubmit}
          addPost={addPost2}
        />
        <PostList posts={posts} />
      </div>
    )
  }
}

export default App
