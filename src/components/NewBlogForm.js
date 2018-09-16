import React from "react"

export default ({currentPost, postChangeHandler}) => {
  const handleInputChange = (e) => {
    const val = e.target.value
    postChangeHandler(val)
  }
  console.log('currentPost', currentPost)
  return (
    <form>
      <input type="text" value={currentPost} onChange={handleInputChange}/>
    </form>
  )
}
