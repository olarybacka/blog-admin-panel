import React from "react"
import "./styles/form.css"
import { connect } from "react-redux"
import { updateTitle, updateContent, addPost } from "../../reducers/post"

const AddPost = ({
  currentContent,
  currentTitle,
  updateContent,
  updateTitle,
  addPost
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
    addPost({ title: currentTitle, content: currentContent })
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default connect(
  state => ({
    currentContent: state.currentContent,
    currentTitle: state.currentTitle
  }),
  { updateContent, updateTitle, addPost }
)(AddPost)
