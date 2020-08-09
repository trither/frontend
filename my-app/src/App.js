import React, { Component } from 'react'
import './styles/App.css'
import  CheckBox  from './Checkbox'
import Charts from './Charts'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputs: [
        { groupId: 1, id: 1, coordinates: "&latitude=43.6415&longitude=-70.2409", value: "south", isChecked: false },
        { groupId: 1, id: 2, coordinates: "&latitude=45.4475&longitude=-122.7221", value: "west", isChecked: false },
        { groupId: 1, id: 3, coordinates: "&latitude=45.5154&longitude=-122.6604", value: "east", isChecked: false },
        { groupId: 1, id: 4, coordinates: "&latitude=45.6075&longitude=-122.7236", value: "north", isChecked: false },
        { groupId: 2, id: 1, coordinates: false, value: "vegan", isChecked: false },
        { groupId: 2, id: 2, coordinates: false, value: "seafood", isChecked: false },
        { groupId: 2, id: 3, coordinates: false, value: "burger", isChecked: false },
        { groupId: 2, id: 4, coordinates: false, value: "vegetarian", isChecked: false },
      ]
    };
  }

  handleAllChecked = id => event => {
    let searchInputs = this.state.searchInputs;
    console.log(event.target.checked);
    searchInputs
      .filter(f => f.groupId === id)
      .forEach(searchInput => {
        searchInput.isChecked = event.target.checked;
      });
    this.setState({ searchInputs: searchInputs });
  };

  handleCheckfieldElement = event => {
    let searchInputs = this.state.searchInputs;
    searchInputs.forEach(searchInput => {
      if (`${searchInput.groupId}-${searchInput.id}` === event.target.value)
        searchInput.isChecked = event.target.checked;
    });
    this.setState({ searchInputs: searchInputs });
  };

  render() {
    console.log(this.state.searchInputs);
    return (
      <div className="App">
        <h1> Homescreen description and welcome message goes here!  </h1>
        <h2> Choose food categories and areas of the portland area for restaurant info </h2>
        {[{ id: 1, name: "Check / Uncheck All" }, { id: 2, name: "Check / Uncheck All" }].map(item => (
          <div>
            <input
              type="checkbox"
              onChange={this.handleAllChecked(item.id)}
              value="checkedall"
            />{" "}
            {item.name}
            <ul>
              {this.state.searchInputs
                .filter(fruit => fruit.groupId === item.id)
                .map((searchInput, index) => {
                  return (
                    <CheckBox
                      key={`${item.id}-${searchInput.id}`}
                      handleCheckfieldElement={this.handleCheckfieldElement}
                      {...searchInput}
                      value={`${item.id}-${searchInput.id}`}
                      label={searchInput.value}
                    />
                  );
                })}
            </ul>
          </div>
        ))}
        <Charts values={this.state.searchInputs}/>
      </div>
    );
  }
}

export default App;
