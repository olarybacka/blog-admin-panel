import React from "react"
import ReactDOM from "react-dom"
import {bindActionCreators} from "redux"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import store from "./store"
import { updateContent, updateTitle, addPost } from "./reducers/post"

const addPost2 = val => store.dispatch(addPost(val))

const actions = bindActionCreators(
  { updateContent, updateTitle },
  store.dispatch
)

const render = () => {
  console.log("updateTitle", actions)
  const state = store.getState()
  ReactDOM.render(
    <App
      posts={state.posts}
      currentTitle={state.currentTitle}
      currentContent={state.currentContent}
      updateTitle={actions.updateTitle}
      updateContent={actions.updateContent}
      addPost2={addPost2}
    />,
    document.getElementById("root")
  )
}
render()

store.subscribe(render)
registerServiceWorker()
