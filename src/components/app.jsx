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
      cards: localStorage.getItem('flash-cards') ? JSON.parse(localStorage.getItem('flash-cards')) : []
    }
    this.setView = this.setView.bind(this)
    this.getView = this.getView.bind(this)
    this.addCard = this.addCard.bind(this)
    this.saveCards = this.saveCards.bind(this)
  }

  setView(view) {
    this.setState({ view })
  }

  getView() {
    switch(this.state.view) {
      case 'create-card':
        return (
        <AppContext.Provider value={{addCard: this.addCard, setView: this.setView}}>
          <CreateCard />;
        </AppContext.Provider>
        )
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return (
          <AppContext.Provider value={this.state.cards}>
            <ViewCards />
          </AppContext.Provider>
        )
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
    console.log("Cards from App:", this.state.cards)
    return (
        <div>
          <Nav setView={this.setView} />
          {this.getView()}
        </div>
    )
  }
}

export { AppContext }
