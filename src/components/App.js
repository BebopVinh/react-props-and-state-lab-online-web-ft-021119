import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: [],
      filters: {
        type: 'all',
      }
    }
  }

  // type = this.state.filters.type

  handleChange = (event) => {
    this.setState({
      filters:{
        type: event.target.value
      }
    })
  }

  handleClick = (event) => {
    let type = this.state.filters.type
    debugger
    if(type === "all") {
      fetch("/api/pets")
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.setState({
            pets: json
          })
        })
    } else {
      fetch(`/api/pets?type=${type}`)
        .then(response => response.json())
        .then(json => {
          this.setState({
            pets: json
          })
        })
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChange} clickFunc={this.handleClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
