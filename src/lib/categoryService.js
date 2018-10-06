import headers from './headers'

export default {
  getCategories: () => {
    return fetch("http://localhost:8080/categories").then(res => res.json())
  },

  createCategory: name => {
    return fetch("http://localhost:8080/categories", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(name)
    }).then(res => res.json())
  },
}
