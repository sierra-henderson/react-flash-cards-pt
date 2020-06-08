import React from 'react'
import ViewCards from './view-cards'
import ReviewCards from './review-cards'
import CreateCard from './create-card'
import Nav from './nav'

const AppContext = React.createContext()

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'view-cards',
      cards: []
    }
    this.setView = this.setView.bind(this)
    this.getView = this.getView.bind(this)
  }

  setView(view) {
    this.setState({ view })
  }

  getView() {
    switch(this.state.view) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  saveCards() {
    const cardsString = JSON.stringify(this.state.cards)
    localStorage.setItem('flash-cards', cardsString)
  }

  addCard(card) {
    this.setState({
      cards: this.state.cards.concat([card])
    }, this.saveCards)
  }

  render() {
    console.log(this.state.cards)
    return (
      <AppContext.Provider value={this.state}>
        <div>
          <Nav setView={this.setView} />
          {this.getView()}
        </div>
      </AppContext.Provider>
    )
  }
}
