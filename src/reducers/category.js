import api from "../lib/categoryService"

export const CATEGORY_ADD = "CATEGORY_ADD"
const CATEGORIES_LOAD = "CATEGORIES_LOAD"
const NAME_UPDATE = "NAME_UPDATE"

const initState = {
  categories: [],
  currentCategoryName: ""
}

export const loadCategories = categories => ({
  type: CATEGORIES_LOAD,
  payload: categories
})
export const updateCategoryName = name => ({
  type: NAME_UPDATE,
  payload: name
})
export const addCategory = name => ({
  type: CATEGORY_ADD,
  payload: name
})

export const fetchCategories = () => {
  return dispatch => {
    api.getCategories().then(categories => dispatch(loadCategories(categories)))
  }
}
export const saveCategory = category => {
  return dispatch => {
    api
      .createCategory(category)
      .then(category => dispatch(addCategory(category)))
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case CATEGORY_ADD:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        currentCategoryName: ""
      }
    case CATEGORIES_LOAD:
      return { ...state, categories: action.payload }
    case NAME_UPDATE:
      return { ...state, currentCategoryName: action.payload }
    default:
      return state
  }
}
