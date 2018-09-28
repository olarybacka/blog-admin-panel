import { getPosts, createPost } from "../lib/postService"

const initState = {
  posts: [],
  currentTitle: "",
  currentContent: ""
}

const POST_ADD = "POST_ADD"
const TITLE_UPDATE = "TITLE_UPDATE"
const CONTENT_UPDATE = "CONTENT_UPDATE"
const POSTS_LOAD = "POSTS_LOAD"

export const updateTitle = val => ({ type: TITLE_UPDATE, payload: val })
export const updateContent = val => ({ type: CONTENT_UPDATE, payload: val })
export const addPost = post => ({ type: POST_ADD, payload: post })
export const loadPosts = posts => ({ type: POSTS_LOAD, payload: posts })
export const fetchPosts = () => {
  return (dispatch) => {
    getPosts().then(posts => dispatch(loadPosts(posts)) )
  }
}

export const savePost = (post) => {
  return (dispatch) => {
    createPost(post).then(res => dispatch(addPost(res)))
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
    case POSTS_LOAD:
      return { ...state, posts: action.payload }
    default:
      return state
  }
}
