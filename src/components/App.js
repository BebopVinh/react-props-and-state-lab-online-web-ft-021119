import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all',
        pets: null
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      type: event.target.value
    })
  }

  handleClick(this) {
    let type = this.state.filters.type
    let pets = 
    if(type === "all") {
      fetch("/api/pets")
        .then(response => response.json)
        .then(json => {
          this.setState({
            pets: json
          })
          debugger
        })
    } else {
      debugger
      // fetch(`/api/pets?type=${type}`)
      //   .then(response => response.json)
      //   .then(json => {
      //     this.setState({
      //       pets: json
      //     })
      //   })
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
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.handleClick(this)}/>
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
