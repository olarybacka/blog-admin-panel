import React, { Component } from "react"
import "./App.css"
import AddPost from "./components/Post/AddPost"
import PostList from "./components/Post/PostList"
class App extends Component {
  render() {
    const {
      posts,
      currentContent,
      currentTitle,
      updateTitle,
      updateContent,
      addPost
    } = this.props
    return (
      <div className="App">
        <AddPost
          currentContent={currentContent}
          currentTitle={currentTitle}
          updateTitle={updateTitle}
          updateContent={updateContent}
          addPost={addPost}
        />
        <PostList posts={posts} />
      </div>
    )
  }
}

export default App
