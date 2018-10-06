import React from "react"
import { connect } from "react-redux"
import { updateCategoryName, saveCategory } from "../../reducers/category"
import { showLoader } from "../../reducers/loader"

const AddCategory = ({
  currentCategoryName,
  updateCategoryName,
  showLoader,
  saveCategory
}) => {
  const handleCategoryNameChange = e => updateCategoryName(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    showLoader(true)
    saveCategory({ name: currentCategoryName })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Add Category</p>
        <input
          type="text"
          value={currentCategoryName}
          onChange={handleCategoryNameChange}
          required
        />
      </form>
    </div>
  )
}

export default connect(
  state => ({
    currentCategoryName: state.category.currentCategoryName
  }),
  { updateCategoryName, showLoader, saveCategory }
)(AddCategory)
