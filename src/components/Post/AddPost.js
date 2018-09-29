import React from "react"
import "./styles/form.css"
import { connect } from "react-redux"
import { updateTitle, updateContent, savePost } from "../../reducers/post"
import { showLoader } from "../../reducers/loader"

const AddPost = ({
  currentContent,
  currentTitle,
  updateContent,
  updateTitle,
  savePost,
  showLoader
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
    currentContent: state.post.currentContent,
    currentTitle: state.post.currentTitle
  }),
  { updateContent, updateTitle, savePost, showLoader }
)(AddPost)
