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
      }
    }
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  // type = this.state.filters.type

  handleChange = (event) => {
    this.setState({
      filters:{
        type: event.target.value
      }
    })
  }

  handleClick = () => {
    let type = this.state.filters.type

    if(type === "all") {
      fetch("/api/pets")
        .then(response => response.json())
        .then(json => {
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

  onAdoptPet(petId) {
    let currentPet = this.state.pets.find(pet => pet.id === petId)
    currentPet.isAdopted = true
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
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.handleClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
