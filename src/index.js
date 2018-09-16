import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import store from "./store"
// import {bindActionCreators} from 'redux'
import { updateCurrent } from "./reducers/post"

const postChangeHandler = val => store.dispatch(updateCurrent(val))

const render = () => {
  const state = store.getState()
  ReactDOM.render(
    <App
      posts={state.posts}
      currentPost={state.currentPost}
      postChangeHandler={postChangeHandler}
    />,
    document.getElementById("root")
  )
}
render()

store.subscribe(render)
registerServiceWorker()
