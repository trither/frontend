import React, { Component } from 'react'
import './App.css'
import  CheckBox  from './Checkbox'
import Charts from './charts'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruites: [
        {id: 1, value: "south", isChecked: false},
        {id: 2, value: "west", isChecked: false},
        {id: 3, value: "east", isChecked: false},
        {id: 4, value: "north", isChecked: false}
      ]
    }
  }
  
  handleAllChecked = (event) => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => fruite.isChecked = event.target.checked) 
    this.setState({fruites: fruites})

  }

  handleCheckChieldElement = (event) => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => {
       if (fruite.value === event.target.value)
          fruite.isChecked =  event.target.checked
    })
    this.setState({fruites: fruites})

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
          this.state.fruites.map((fruite) => {
            return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
          })
        }
        </ul>
        <h2>
            Pick a food category
        </h2>
        <button onClick>
            vegan
        </button>
        <button>
            vegetarian
        </button>
        <button>
            seafood
        </button>
        <button>
            burger
        </button>
        <Charts/>
      </div>
    );
  }
}

export default App
