import React from 'react'
import ViewCards from './view-cards'
import ReviewCards from './review-cards'
import CreateCard from './create-card'

const AppContext = React.createContext()

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { view: 'view-cards' }
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
        return <Review />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state.view}>
        <div>
          {this.getView()}
        </div>
      </AppContext.Provider>
    )
  }
}
