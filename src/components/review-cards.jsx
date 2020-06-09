import React from 'react'
import { AppContext } from './app'

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = { side: 'front' }
  }

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
