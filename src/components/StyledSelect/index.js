import React, { Component } from "react"
import "./styled-select.css"

class StyledSelect extends Component {
  state = {
    wrapperRef: "",
    open: false
  }
  setWrapperRef = node => {
    this.setState({ wrapperRef: node })
  }

  handleClickOutside = event => {
    event.preventDefault()
    event.stopPropagation()
    if (this.state.open && !this.state.wrapperRef.contains(event.target)) {
      this.setState({ open: false })
    }
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
  }
  handleSelect = selected => {
    this.setState({ open: false })
    this.props.handleSelect(selected)
  }

  toggleOpen = () => this.setState({ open: !this.state.open })

  render() {
    const { items = [], selected = [] } = this.props
    console.log('selected', selected)
    const { open } = this.state
    return (
      <div className="styled-select" ref={this.setWrapperRef}>
        <div className="styled-select-dropdown" onClick={this.toggleOpen}>
          {selected.map(({name, id}) => <div key={id}> {name}</div>)}
          <div className={"caret" + (open ? " caret-up" : " caret-down")}>
            {open ? "∧" : "∨"}
          </div>
        </div>
        <div className={"styled-select-options " + (open ? "open" : "closed")}>
          {items.map(({ name, id }) => (
            <div
              onClick={() => this.handleSelect({id, name})}
              className={"styled-select-option"}
              key={id}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default StyledSelect
