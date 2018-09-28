
export const getPosts = () => {
  return (
    fetch('http://localhost:8080/posts')
    .then(res => res.json())
  )
}


export const createPost = (post) => {
  return (
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
  )
}
