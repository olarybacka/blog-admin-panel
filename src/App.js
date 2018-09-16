import React, { Component } from "react"
import "./App.css"
import NewBlogForm from "./components/NewBlogForm"
import PostList from "./components/PostList"
class App extends Component {
  render() {
    const posts = this.props.posts
    return (
      <div className="App">
        <NewBlogForm />
        <PostList posts={posts}/>
      </div>
    )
  }
}

export default App
