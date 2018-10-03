export default {
  getCategories: () => {
    return fetch("http://localhost:8080/categories").then(res => res.json())
  }
}
