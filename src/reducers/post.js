import { getPosts } from "../lib/postService"
const initState = {
  posts: [],
  currentTitle: "",
  currentContent: ""
}

const POST_ADD = "POST_ADD"
const TITLE_UPDATE = "TITLE_UPDATE"
const CONTENT_UPDATE = "CONTENT_UPDATE"
const LOAD_POSTS = "LOAD_POSTS"

export const updateTitle = val => ({ type: TITLE_UPDATE, payload: val })
export const updateContent = val => ({ type: CONTENT_UPDATE, payload: val })
export const addPost = val => ({ type: POST_ADD, payload: val })
export const loadPosts = posts => ({ type: LOAD_POSTS, payload: posts })
export const fetchPosts = () => {
  return (dispatch) => {
    getPosts().then(posts => dispatch(loadPosts(posts)))
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case POST_ADD:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        currentTitle: "",
        currentContent: ""
      }
    case TITLE_UPDATE:
      return { ...state, currentTitle: action.payload }
    case CONTENT_UPDATE:
      return { ...state, currentContent: action.payload }
    case LOAD_POSTS:
      return { ...state, posts: action.payload }
    default:
      return state
  }
}
