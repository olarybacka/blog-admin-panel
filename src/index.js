import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import store from "./store"
import { updateCurrent, addPost } from "./reducers/post"

const postChangeHandler = val => store.dispatch(updateCurrent(val))
const addPost2 = val => store.dispatch(addPost(val))

const render = () => {
  const state = store.getState()
  ReactDOM.render(
    <App
      posts={state.posts}
      currentPost={state.currentPost}
      postChangeHandler={postChangeHandler}
      addPost2={addPost2}
    />,
    document.getElementById("root")
  )
}
render()

store.subscribe(render)
registerServiceWorker()
