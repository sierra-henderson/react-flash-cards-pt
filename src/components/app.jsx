import React from 'react'

const AppContext = React.createContext('light')

export default class App extends React.Component {
  render() {
    return <h1 className="text-center">Flash Card App</h1>
  }
}
