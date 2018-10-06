import headers from './headers'

export default {
  getPosts: () => {
    return fetch("http://localhost:8080/posts").then(res => res.json())
  },

  createPost: post => {
    return fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(post)
    }).then(res => res.json())
  },

  deletePost: id => {
    return fetch(`http://localhost:8080/posts/${id}`, {
      method: "DELETE",
      headers: headers
    })
  }
}
