import React, { Component } from "react"
import "./App.css"
import AddPost from "./components/Post/AddPost"
import PostList from "./components/Post/PostList"
import Loader from "./components/Loader"

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddPost />
        <Loader />
        <PostList />
      </div>
    )
  }
}

export default App
