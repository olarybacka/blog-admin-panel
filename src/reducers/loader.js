import { POST_ADD, POSTS_LOAD } from "./post"
import { CATEGORY_ADD } from "./category"
const LOADING = "LOADING"

export const showLoader = isLoading => ({ type: LOADING, payload: isLoading })

export default (state = { loading: false }, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload }
    case POST_ADD:
      return { ...state, loading: false }
    case POSTS_LOAD:
      return { ...state, loading: false }
    case CATEGORY_ADD:
      return { ...state, loading: false }
    default:
      return state
  }
}
