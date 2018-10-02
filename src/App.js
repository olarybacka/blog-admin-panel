import React, { Component } from "react"
import "./App.css"
import PostsContainer from "./components/Post"
import Loader from "./components/Loader"
import { Link, BrowserRouter, Route } from "react-router-dom"
import AddCategory from "./components/Category/AddCategory"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader />
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/add-category">Add Cateogry</Link>

            <Route exact path="/posts" component={PostsContainer} />
            <Route exact path="/add-category" component={AddCategory} />
            <Route exact path="/" component={PostsContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
