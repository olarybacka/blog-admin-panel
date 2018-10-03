import React, { Component } from "react"
import "./App.css"
import PostsContainer from "./components/Post"
import Loader from "./components/Loader"
import { Link, BrowserRouter, Route } from "react-router-dom"
import CategoryContainer from "./components/Category"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader />
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/categories">Categories</Link>

            <Route exact path="/posts" component={PostsContainer} />
            <Route exact path="/categories" component={CategoryContainer} />
            <Route exact path="/" component={PostsContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
