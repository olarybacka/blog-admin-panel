import api from "../lib/postService"

const initState = {
  posts: [],
  currentTitle: "",
  currentContent: ""
}

const POST_ADD = "POST_ADD"
const TITLE_UPDATE = "TITLE_UPDATE"
const CONTENT_UPDATE = "CONTENT_UPDATE"
const POSTS_LOAD = "POSTS_LOAD"
const DELETE_POST = "DELETE_POST"

export const updateTitle = val => ({ type: TITLE_UPDATE, payload: val })
export const updateContent = val => ({ type: CONTENT_UPDATE, payload: val })
export const addPost = post => ({ type: POST_ADD, payload: post })
export const loadPosts = posts => ({ type: POSTS_LOAD, payload: posts })

export const deletePost = id => {
  return dispatch => {
    api.deletePost(id).then(() => dispatch({ type: DELETE_POST, payload: id }))
  }
}

export const fetchPosts = () => {
  return dispatch => {
    api.getPosts().then(posts => dispatch(loadPosts(posts)))
  }
}

export const savePost = post => {
  return dispatch => {
    api.createPost(post).then(res => dispatch(addPost(res)))
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
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(p => p.id !== action.payload) }
    default:
      return state
  }
}
