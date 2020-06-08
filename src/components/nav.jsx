import React from 'react'

export default class Nav extends React.Component {
  render() {
    return (
      <ul class="nav nav-pills justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" onClick={() => this.props.setView("view-cards")} href="#">View Cards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => this.props.setView("review-cards")} href="#">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => this.props.setView("view-cards")} href="#">Create Card</a>
        </li>
      </ul>
    )
  }
}
