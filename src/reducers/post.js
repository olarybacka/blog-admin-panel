const initState = {
  posts: [{ id: 1, title: "Blog Post", content: "aaa" }],
  currentPost: ""
}

const POST_ADD = "POST_ADD"
const CURRENT_UPDATE = "CURRENT_UPDATE"

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val })
export const addPost = val => ({ type: POST_ADD, payload: val })

export default (state = initState, action) => {
  switch (action.type) {
    case POST_ADD:
      return { ...state, posts: [...state.posts, action.payload] }
    case CURRENT_UPDATE:
      return { ...state, currentPost: action.payload }
    default:
      return state
  }
}
