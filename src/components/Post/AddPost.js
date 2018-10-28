import React from "react"
import "./styles/form.css"
import { connect } from "react-redux"
import {
  updateTitle,
  updateContent,
  savePost,
  selectCategory,
  removeSelectedCategory
} from "../../reducers/post"
import { showLoader } from "../../reducers/loader"
import StyledSelect from "../StyledSelect"

const AddPost = ({
  currentContent,
  currentTitle,
  updateContent,
  updateTitle,
  savePost,
  showLoader,
  selectCategory,
  selectedCategories,
  removeSelectedCategory
}) => {
  const handleContentChange = e => {
    const val = e.target.value
    updateContent(val)
  }
  const handleTitleChange = e => {
    const val = e.target.value
    updateTitle(val)
  }
  const handleSubmit = e => {
    e.preventDefault()
    showLoader(true)
    savePost({ title: currentTitle, content: currentContent })
  }
  const handleSelect = category => {
    selectedCategories.some(cat => cat.id === category.id)
      ? removeSelectedCategory(category)
      : selectCategory(category)
  }
  return (
    <div className="add-post">
      <form onSubmit={handleSubmit}>
        <p>Title:</p>
        <input
          type="text"
          value={currentTitle}
          onChange={handleTitleChange}
          required
        />
        <p>Content: </p>
        <input
          type="text"
          value={currentContent}
          onChange={handleContentChange}
          required
        />
        <StyledSelect
          handleSelect={handleSelect}
          items={[{ name: "A", id: 1 }, { name: "B", id: 2 }]}
          selected={selectedCategories}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default connect(
  state => ({
    currentContent: state.post.currentContent,
    currentTitle: state.post.currentTitle,
    selectedCategories: state.post.selectedCategories
  }),
  {
    updateContent,
    updateTitle,
    savePost,
    showLoader,
    selectCategory,
    removeSelectedCategory
  }
)(AddPost)
