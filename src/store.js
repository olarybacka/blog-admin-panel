import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducers/post"
import { composeWithDevTools } from "redux-devtools-extension"

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
