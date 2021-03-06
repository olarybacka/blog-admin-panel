import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import postReducer from "./reducers/post"
import loadingReducer from "./reducers/loader"
import categoriesReducer from "./reducers/category"
import { composeWithDevTools } from "redux-devtools-extension"

const reducer = combineReducers({
  post: postReducer,
  loading: loadingReducer,
  category: categoriesReducer
})

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
