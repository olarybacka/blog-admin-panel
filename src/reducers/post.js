const initState = {
  posts: [
    {id: 1, title: "Blog Post", content: "aaa"}
  ]
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'POST_ADD': 
      return {...state, posts: [...state.posts, action.payload]}
    default: 
      return state
  }
}
