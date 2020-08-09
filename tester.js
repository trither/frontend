import React, { Component } from 'react'
import './App.css'
import  CheckBox  from './Checkbox'
import Charts from './charts'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInputs: [
        {id: 1, value: "south", coordinates: "&latitude=43.6415&longitude=-70.2409", isChecked: false},
        {id: 2, value: "west", coordinates: "&latitude=45.4475&longitude=-122.7221", isChecked: false},
        {id: 3, value: "east", coordinates: "&latitude=45.5154&longitude=-122.6604", isChecked: false},
        {id: 4, value: "north", coordinates: "&latitude=45.6075&longitude=-122.7236", isChecked: false},
        {id: 5, value: "vegan", coordinates: false, isChecked: false},
        {id: 6, value: "seafood", coordinates: false, isChecked: false},
        {id: 7, value: "burger", coordinates: false, isChecked: false},
        {id: 8, value: "vegetarian", coordinates: false, isChecked: false},

      ]
    }
  }
  
  handleAllChecked = (event) => {
    let searchInputs = this.state.searchInputs
    searchInputs.forEach(searchInput => searchInput.isChecked = event.target.checked) 
    this.setState({searchInputs: searchInputs})

  }

  handleCheckfieldElement = (event) => {
    let searchInputs = this.state.searchInputs
    searchInputs.forEach(searchInput => {
       if (searchInput.value === event.target.value)
          searchInput.isChecked =  event.target.checked
    })
    this.setState({searchInputs: searchInputs})

  }

  render() {
    return (
      <div className="App">
      <h1> Homescreen description and welcome message goes here! </h1>
      <h2>
          Choose areas of the portland area for restaurant info
      </h2>
      <input type="checkbox" onClick={this.handleAllChecked}  value="checkedall" /> Check / Uncheck All
        <ul>
        {
          this.state.searchInputs.map((searchInput) => {
            return (<CheckBox handleCheckfieldElement={this.handleCheckfieldElement}  {...searchInput} />)
          })
        }
        </ul>
        <h2>
            Pick a food category
        </h2>
        <Charts values={this.state.searchInputs}/>
      </div>
    );
  }
}

export default App
