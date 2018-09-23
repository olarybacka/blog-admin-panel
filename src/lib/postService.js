
export const getPosts = () => {
  return (
    fetch('http://localhost:8080/Items')
    .then(res => res.json())
  )
}
