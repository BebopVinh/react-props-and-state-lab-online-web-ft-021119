import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets(pets) {
    let x = pets.map(pet => {
      return <Pet name={pet.name} age={pet.age} weight={pet.weight} gender={pet.gender} isAdopted={pet.isAdopted}/>
    })

    // let pet = pets[0]

    // let x = <Pet name={pet.name} age={pet.age} weight={pet.weight} gender={pet.gender} isAdopted={pet.isAdopted} />
    // debugger
    return x
  }

  render() {
    return <div className="ui cards">{this.renderPets(this.props.pets)}</div>
  }
}

export default PetBrowser
