import React from 'react'

class Pet extends React.Component {
  checkGender(gender) {
    if (gender === "male") {
      return '♂'
    } else if (gender === "female") {
      return '♀'
    }
  }

  checkAdoption(isAdopted) {
    if (isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.checkGender(this.props.gender)}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
          {this.checkAdoption(this.props.isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet
