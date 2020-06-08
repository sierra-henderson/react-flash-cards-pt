import React from 'react'
import ViewCards from './view-cards'
import ReviewCards from './review-cards'
import CreateCard from './create-card'

const AppContext = React.createContext('light')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { view: 'view-cards' }
  }

  render() {
    return <h1 className="text-center">Flash Card App</h1>
  }
}
