import React from 'react'

export default class Nav extends React.Component {
  render() {
    return (
      <ul class="nav nav-pills justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="#">View Cards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Create Card</a>
        </li>
      </ul>
    )
  }
}
