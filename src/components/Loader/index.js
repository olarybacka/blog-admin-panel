import React from "react"
import { connect } from "react-redux"
import './style.css'

const Spinner = ({ loading }) =>
  loading ? (
    <div>
      <div class="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  ) : null

export default connect(state => ({ loading: state.loading.loading }))(Spinner)
