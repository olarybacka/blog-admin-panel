const initState = {
  posts: [{ id: 1, title: "Blog Post", content: "aaa" }],
  currentTitle: "",
  currentContent: ""
}

const POST_ADD = "POST_ADD"
const TITLE_UPDATE = "TITLE_UPDATE"
const CONTENT_UPDATE = "CONTENT_UPDATE"

export const updateTitle = val => ({ type: TITLE_UPDATE, payload: val })
export const updateContent = val => ({ type: CONTENT_UPDATE, payload: val })
export const addPost = val => ({ type: POST_ADD, payload: val })

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
    default:
      return state
  }
}
