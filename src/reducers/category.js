import api from "../lib/categoryService"

const CATEGORY_ADD = "CATEGORY_ADD"
const CATEGORIES_LOAD = "CATEGORIES_LOAD"

export const loadCategories = categories => ({
  type: CATEGORIES_LOAD,
  payload: categories
})

export const fetchCategories = () => {
  return dispatch => {
    api.getCategories().then(categories => dispatch(loadCategories(categories)))
  }
}
export default (state = {categories: []}, action) => {
  switch (action.type) {
    case CATEGORY_ADD:
      return { ...state, categories: [...state.categories, action.payload] }
    case CATEGORIES_LOAD:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}
