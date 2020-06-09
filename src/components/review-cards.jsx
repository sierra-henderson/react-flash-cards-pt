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

  nextCard(value) {
    if (value.activeCard === value.cards.length - 1) {
      this.props.setActiveCard(0)
    } else {
      this.props.setActiveCard(value++)
    }
  }

  previousCard(value) {
    if (value.activeCard === 0) {
      this.props.setActiveCard(value.cards.length - 1)
    } else {
      this.props.setActiveCard(value--)
    }
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
