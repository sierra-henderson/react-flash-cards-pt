import React from 'react'
import { AppContext } from './app'

export default class ReviewCards extends React.Component {
  componentDidMount() {
    this.props.setActiveCard(0)
  }

  render() {
    return (
      <AppContext.Consumer>
        {
          value => (
            <h1 className="text-center">Review Cards</h1>
        )}
      </AppContext.Consumer>
    )
  }
}
