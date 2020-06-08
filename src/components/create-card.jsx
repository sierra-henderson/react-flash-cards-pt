import React from 'react'
import { AppContext } from './app'

export default class CreateCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionValue: '',
      answerValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(callback) {
    const flashcardObj = {
      question: this.state.questionValue,
      answer: this.state.answerValue
    }
    callback(flashcardObj)
  }

  handleQuestionChange() {
    this.setState({ questionValue: event.target.value })
  }

  handleAnswerChange() {
    this.setState({ answerValue: event.target.value })
  }

  render() {
    return (
      <AppContext.Consumer>
        {this.addCard => (
        <h1 className="text-center">Create New Card</h1>
        <form>
          <div class="form-group">
            <label for="question">Question</label>
            <textarea class="form-control" id="question" rows="3" value={this.state.questionValue} onChange={this.handleQuestionChange}></textarea>
          </div>
          <div class="form-group">
            <label for="answer">Answer</label>
            <textarea class="form-control" id="answer" rows="3" value={this.state.answerValue} onChange={this.handleAnswerChange}></textarea>
          </div>
          <div className="justify-content-end">
            <button type="reset" class="btn btn-outline-danger">Cancel</button>
            <button type="submit" class="btn btn-outline-primary" onClick={() => this.handleSubmit(this.addCard)}>Save Card</button>
          </div>
        </form>
        )}
      </AppContext.Consumer>
    )
  }
}
