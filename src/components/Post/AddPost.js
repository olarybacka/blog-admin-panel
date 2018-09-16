import React from "react"
import './form.css'

export default ({ currentPost, postChangeHandler, addPost }) => {
  const handleInputChange = e => {
    const val = e.target.value
    postChangeHandler(val)
  }
  const handleSubmit = e => {
    e.preventDefault()
    addPost({ title: currentPost, content: currentPost })
  }
  return (
    <div className="add-post">
      <form onSubmit={handleSubmit}>
        <p>Title and content: </p>
        <input type="text" value={currentPost} onChange={handleInputChange} />
      </form>
    </div>
  )
}
