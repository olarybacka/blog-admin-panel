import React from "react"
import { connect } from "react-redux"
import "./style.css"

const Spinner = ({ loading }) =>
  loading ? (
    <div>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  ) : (
    <div className="lds-ellipsis" />
  )

export default connect(state => ({ loading: state.loading.loading }))(Spinner)
