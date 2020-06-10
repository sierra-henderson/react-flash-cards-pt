import React from 'react'
import { AppContext } from './context'

export default class ViewCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.confirm = this.confirm.bind(this)
  }

  open(i) {
    console.log("index:", i)
    this.props.setActiveCard(i)
    console.log("dsflk", this.context.activeCard)
    this.setState({ isOpen: true });
  }

  close(){
    this.setState({ isOpen: false });
  }

  confirm() {
    this.props.deleteCard(this.context.activeCard)
    this.close()
  }

  render() {
    if(this.state.isOpen) {
      return (
            <div className="container">
              <div className="basic-modal" onClick={this.close}>
                <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                  <h3>Are you sure you want to delete this card?</h3>
                  <p><span className="font-weight-bold">Q:</span>{this.context.activeCard.question}</p>
                  <p><span className="font-weight-bold">A:</span>{this.context.activeCard.answer}</p>
                  <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-danger" onClick={this.close}>Cancel</button>
                    <button type="button" className="btn btn-outline-success ml-2" onClick={this.confirm}>Confirm</button>
                  </div>
                </div>
              </div>
              <h1 className="text-center mb-4">My Cards</h1>
              <div className="row row-cols-md-3">
                {
                  this.context.cards.map((card, i) => {
                    return (
                      <div key={i} className="card h-100">
                        <div className="card-body bg-dark">
                          <h5 className="card-title text-light">Question</h5>
                          <p className="text-white">{card.question}</p>
                        </div>
                        <div className="card-body bg-secondary">
                          <h5 className="card-title text-light">Answer</h5>
                          <p className="text-white">{card.answer}</p>
                        </div>
                        <div className="card-body bg-dark d-flex justify-content-center">
                          <i className="text-light far fa-trash-alt fa-lg" onClick={() => this.open(i)}></i>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
      )

    } else {
      return (
            <div className="container">
              <h1 className="text-center mb-4">My Cards</h1>
              <div className="row row-cols-md-3">
                {
                  this.context.cards.map((card, i) => {
                    return (
                      <div key={i} className="card h-100">
                        <div className="card-body bg-dark">
                          <h5 className="card-title text-light">Question</h5>
                          <p className="text-white">{card.question}</p>
                        </div>
                        <div className="card-body bg-secondary">
                          <h5 className="card-title text-light">Answer</h5>
                          <p className="text-white">{card.answer}</p>
                        </div>
                        <div className="card-body bg-dark d-flex justify-content-center">
                          <i className="text-light far fa-trash-alt fa-lg" onClick={() => this.open(i)}></i>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
      )
    }
  }
}

ViewCards.contextType = AppContext
