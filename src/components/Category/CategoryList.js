import React, { Component } from "react"
import { fetchCategories } from "../../reducers/category"
import { connect } from "react-redux"

class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }
  render() {
    return (
      <ul>
        {this.props.categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    )
  }
}

export default connect(
  state => ({ categories: state.category.categories }),
  { fetchCategories }
)(CategoryList)
