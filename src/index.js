import React from "react"
import ReactDOM from "react-dom"
import {bindActionCreators} from "redux"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import store from "./store"
import { updateContent, updateTitle, addPost } from "./reducers/post"

const actions = bindActionCreators(
  { updateContent, updateTitle, addPost },
  store.dispatch
)

const render = () => {
  const state = store.getState()
  ReactDOM.render(
    <App
      posts={state.posts}
      currentTitle={state.currentTitle}
      currentContent={state.currentContent}
      updateTitle={actions.updateTitle}
      updateContent={actions.updateContent}
      addPost={actions.addPost}
    />,
    document.getElementById("root")
  )
}
render()

store.subscribe(render)
registerServiceWorker()
