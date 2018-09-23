import React, { Component } from "react"
import "./App.css"
import AddPost from "./components/Post/AddPost"
import PostList from "./components/Post/PostList"
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddPost />
        <PostList />
      </div>
    )
  }
}

export default App
