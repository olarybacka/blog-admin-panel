import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducers/post"

export default createStore(reducer, applyMiddleware(thunk))
